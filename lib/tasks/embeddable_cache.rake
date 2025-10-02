# frozen_string_literal: true

namespace :embeddable do
  desc "Refresh cache for all companies using EmbeddableCacheRefreshService"
  task :refresh_cache, %i[embeddable_id] => :environment do |_task, args|
    embeddable_id = args[:embeddable_id]

    if embeddable_id.blank?
      puts "Error: embeddable_id parameter is required"
      puts "Usage: rake embeddable:refresh_cache[your-embeddable-id]"
      exit 1
    end

    puts "Starting cache refresh for all companies with embeddable_id: #{embeddable_id}"
    puts "=" * 60

    companies = Company.active
    total_companies = companies.count
    successful_refreshes = 0
    failed_refreshes = 0

    if total_companies == 0
      puts "No active companies found in the database."
      exit 0
    end

    puts "Found #{total_companies} active companies to process"
    puts

    companies.find_each.with_index do |company, index|
      puts "[#{index + 1}/#{total_companies}] Processing company: #{company.name} (ID: #{company.id})"

      begin
        cache_refresh_params = {
          refresh_interval: "1 hour",
          embeddables: [
            {
              embeddable_id: embeddable_id,
              saved_versions: [ "production" ],
            },
          ],
          scheduled_refresh_contexts: [
            {
              security_context: {
                company_id: company.fluid_company_id,
                company_name: company.name,
              },
              environment: "default",
              timezones: [ "UTC" ],
            },
          ],
          roles: [ "default" ],
        }

        service = EmbeddableCacheRefreshService.new(cache_refresh_params)
        result = service.refresh_contexts

        if result[:status] == :unprocessable_entity
          puts "  ❌ Failed: #{result[:errors][:base].join(', ')}"
          failed_refreshes += 1
        else
          puts "  ✅ Success: Cache refreshed successfully"
          successful_refreshes += 1
        end

      rescue StandardError => e
        puts "  ❌ Error: #{e.message}"
        failed_refreshes += 1
        Rails.logger.error(
          "[EmbeddableCacheRefreshTask] Failed to refresh cache for company #{company.id}: #{e.message}"
        )
      end

      puts
    end

    puts "=" * 60
    puts "Cache refresh completed!"
    puts "Total companies processed: #{total_companies}"
    puts "Successful refreshes: #{successful_refreshes}"
    puts "Failed refreshes: #{failed_refreshes}"

    if failed_refreshes > 0
      puts "⚠️  Some refreshes failed. Check the logs for more details."
      exit 1
    else
      puts "🎉 All cache refreshes completed successfully!"
    end
  end

  desc "Refresh cache for a specific company"
  task :refresh_cache_for_company, %i[embeddable_id company_id] => :environment do |_task, args|
    embeddable_id = args[:embeddable_id]
    company_id = args[:company_id]

    if embeddable_id.blank? || company_id.blank?
      puts "Error: Both embeddable_id and company_id parameters are required"
      puts "Usage: rake embeddable:refresh_cache_for_company[your-embeddable-id,company-id]"
      exit 1
    end

    company = Company.find_by(id: company_id)

    unless company
      puts "Error: Company with ID #{company_id} not found"
      exit 1
    end

    puts "Refreshing cache for company: #{company.name} (ID: #{company.id})"
    puts "Embeddable ID: #{embeddable_id}"
    puts "=" * 50

    begin
      cache_refresh_params = {
        refresh_interval: "1 hour",
        embeddables: [
          {
            embeddable_id: embeddable_id,
            saved_versions: [ "production" ],
          },
        ],
        scheduled_refresh_contexts: [
          {
            security_context: {
              company_id: company.fluid_company_id,
              company_name: company.name,
            },
            environment: "default",
            timezones: [ "UTC" ],
          },
        ],
        roles: [ "default" ],
      }

      service = EmbeddableCacheRefreshService.new(cache_refresh_params)
      result = service.refresh_contexts

      if result[:status] == :unprocessable_entity
        puts "❌ Failed: #{result[:errors][:base].join(', ')}"
        exit 1
      else
        puts "✅ Success: Cache refreshed successfully for company #{company.name}"
        puts "Result: #{result.inspect}"
      end

    rescue StandardError => e
      puts "❌ Error: #{e.message}"
      Rails.logger.error(
        "[EmbeddableCacheRefreshTask] Failed to refresh cache for company #{company.id}: #{e.message}"
      )
      exit 1
    end
  end
end
