class AddCompanyToEmbeddables < ActiveRecord::Migration[8.0]
  def change
    add_reference :embeddables, :company, null: true, foreign_key: true
  end
end
