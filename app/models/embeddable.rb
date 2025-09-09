# frozen_string_literal: true

class Embeddable < ApplicationRecord
  validates :embeddable_id, presence: true, uniqueness: true
  validates :name, presence: true

  scope :active, -> { where(active: true) }
  scope :default, -> { where(default: true) }

  # JSONB configuration helpers
  def config_value(key)
    configuration[key.to_s]
  end

  def set_config_value(key, value)
    self.configuration = configuration.merge(key.to_s => value)
  end

  def to_param
    embeddable_id
  end
end
