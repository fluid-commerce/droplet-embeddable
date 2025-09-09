class CreateEmbeddables < ActiveRecord::Migration[8.0]
  def change
    create_table :embeddables do |t|
      t.string :embeddable_id, null: false
      t.string :name, null: false
      t.text :description, null: false, default: ""
      t.jsonb :configuration, null: false, default: {}
      t.boolean :default, null: false, default: false
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end

    add_index :embeddables, :embeddable_id, unique: true
    add_index :embeddables, :name
    add_index :embeddables, :configuration, using: :gin
  end
end
