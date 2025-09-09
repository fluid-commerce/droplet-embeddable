class RemoveCompanyFromEmbeddables < ActiveRecord::Migration[8.0]
  def change
    remove_reference :embeddables, :company, null: false, foreign_key: true
  end
end
