require "test_helper"

class EmbeddableTokenServiceTest < ActiveSupport::TestCase
  def setup
    @company = companies(:acme)
    @params = {
      embeddable_id: "test-embeddable-123",
      expires_in: 7200,
      security_context: {}
    }
    @service = EmbeddableTokenService.new(@company, @params)

    ENV["EMBEDDABLE_API_KEY"] = "test-api-key-123"
    ENV["EMBEDDABLE_USER"]="asd@asd.app"
    ENV["EMBEDDABLE_ENVIRONMENT"]="default"
  end

  test "generates token successfully" do
    mock_response_body = { "token" => "embeddable-token-123", "expires_at" => "2025-01-01T12:00:00Z" }

    # Create a mock HTTParty response object
    mock_response = mock_httparty_response(mock_response_body)

    HTTParty.stub :post, mock_response do
      result = @service.generate_token

      assert_equal mock_response_body, result
    end
  end

  test "generates token with minimal params" do
    minimal_params = { embeddable_id: "minimal-embeddable" }
    minimal_service = EmbeddableTokenService.new(@company, minimal_params)

    mock_response_body = { "token" => "minimal-token" }
    mock_response = mock_httparty_response(mock_response_body)

    HTTParty.stub :post, mock_response do
      result = minimal_service.generate_token

      assert_equal mock_response_body, result
    end
  end

  test "handles HTTParty response error" do
    # Mock HTTParty.post to raise an error
    HTTParty.stub :post, ->(*args) { raise HTTParty::ResponseError.new("Bad Request") } do
      result = @service.generate_token

      assert_equal :unprocessable_entity, result[:status]
      assert_includes result[:errors][:base].first, "Failed to retrieve token from Embeddable"
    end
  end

  test "handles standard error" do
    # Mock HTTParty.post to raise a standard error
    HTTParty.stub :post, ->(*args) { raise StandardError.new("Network timeout") } do
      result = @service.generate_token

      assert_equal :unprocessable_entity, result[:status]
      assert_includes result[:errors][:base].first, "Unexpected error"
    end
  end

  test "builds correct payload structure" do
    expected_payload = {
      embeddableId: "test-embeddable-123",
      expiryInSeconds: 7200,
      securityContext: {
        company_id: @company.fluid_company_id,
        companyName: @company.name
      },
      user: "asd@asd.app",
      environment: "default",
    }

    payload = @service.send(:build_embeddable_payload, @company, @params)
    assert_equal expected_payload, payload
  end

  test "builds payload with defaults" do
    minimal_params = { embeddable_id: "default-embeddable" }
    minimal_service = EmbeddableTokenService.new(@company, minimal_params)

    expected_payload = {
      embeddableId: "default-embeddable",
      expiryInSeconds: 3600,
      securityContext: {
        company_id: @company.fluid_company_id,
        companyName: @company.name,
      },
      user: "asd@asd.app",
      environment: "default",
    }

    payload = minimal_service.send(:build_embeddable_payload, @company, minimal_params)
    assert_equal expected_payload, payload
  end

  test "builds security context correctly" do
    custom_context = { role: "user", permissions: %w[read write] }

    security_context = @service.send(:build_security_context, @company, custom_context)

    expected_context = {
      company_id: @company.fluid_company_id,
      companyName: @company.name,
      role: "user",
      permissions: %w[read write],
    }

    assert_equal expected_context, security_context
  end

  test "builds security context without custom context" do
    security_context = @service.send(:build_security_context, @company)

    expected_context = {
      company_id: @company.fluid_company_id,
      companyName: @company.name,
    }

    assert_equal expected_context, security_context
  end

  test "sets correct headers" do
  headers = @service.send(:embeddable_headers)

  expected_headers = {
    "Content-Type" => "application/json",
    "Accept" => "application/json",
    "Authorization" => "Bearer test-api-key-123",
  }

  assert_equal expected_headers, headers
end

  test "raises error when API key is missing" do
  # Temporarily remove the API key for this test
  original_api_key = ENV["EMBEDDABLE_API_KEY"]
  ENV.delete("EMBEDDABLE_API_KEY")

  assert_raises StandardError do
    @service.send(:embeddable_api_key)
  end

  # Restore the API key for other tests
  ENV["EMBEDDABLE_API_KEY"] = original_api_key
end

  test "makes HTTP request successfully" do
    # Mock HTTParty.post to return a successful response
    mock_response = mock_httparty_response({ "token" => "test-token" })
    HTTParty.stub :post, mock_response do
      result = @service.send(:request_embeddable_token, @company, @params)
      assert_equal({ "token" => "test-token" }, result)
    end
  end

  test "handles JSON parsing error gracefully" do
  # Create a mock response that returns invalid JSON in its body
  invalid_json_response = mock_httparty_response_with_string("invalid json")

  # Mock HTTParty.post to return invalid JSON that will cause parsing error
  HTTParty.stub :post, invalid_json_response do
    # The service should handle this error gracefully and return an error hash
    result = @service.generate_token

    assert_equal :unprocessable_entity, result[:status]
    assert_includes result[:errors][:base].first, "Unexpected error"
  end
end

  test "handles JSON parsing error in request method" do
  # Test the private method directly to ensure JSON parsing errors are handled
  invalid_json_response = mock_httparty_response_with_string("invalid json")

  HTTParty.stub :post, invalid_json_response do
    assert_raises JSON::ParserError do
      @service.send(:request_embeddable_token, @company, @params)
    end
  end
end

  test "JSON parse actually fails with invalid JSON" do
  # Verify that our mock actually causes JSON parsing to fail
  invalid_json_response = mock_httparty_response_with_string("invalid json")

  # This should raise JSON::ParserError
  assert_raises JSON::ParserError do
    JSON.parse(invalid_json_response.body)
  end
end

  test "mock response returns correct body" do
    # Verify our mock is working correctly
    test_body = "test string"
    mock_response = mock_httparty_response_with_string(test_body)

    assert_equal test_body, mock_response.body
  end

private

  def mock_httparty_response(body)
    # Create a mock object that responds to .body like HTTParty::Response does
    mock_response = Minitest::Mock.new
    mock_response.expect :body, body.to_json
    mock_response
  end

  def mock_httparty_response_with_string(body_string)
    # Create a mock object that returns the raw string in body (for invalid JSON testing)
    mock_response = Minitest::Mock.new
    mock_response.expect :body, body_string
    mock_response
  end
end
