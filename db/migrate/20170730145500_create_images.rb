class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :location
      t.string :name
      t.string :thumb_url

      t.timestamps
    end
  end
end
