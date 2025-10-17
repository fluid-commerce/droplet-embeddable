# frozen_string_literal: true

class Embeddable < ApplicationRecord
  belongs_to :company, optional: true

  validates :embeddable_id, presence: true, uniqueness: true
  validates :name, presence: true

  scope :default, -> { where(default: true) }

  before_save :set_default_if_first_for_company

  def config_value(key)
    configuration[key.to_s]
  end

  def set_config_value(key, value)
    self.configuration = configuration.merge(key.to_s => value)
  end

  def to_param
    embeddable_id
  end

private

  def set_default_if_first_for_company
    if company_id.present? && new_record?
      company_embeddables_count = Embeddable.where(company_id: company_id).count
      if company_embeddables_count == 0
        self.default = true
      end
    end
  end
end
