class CreateOtherMaterials < ActiveRecord::Migration[5.0]
  def change
    create_table :other_materials do |t|
      t.string :name

      t.timestamps
    end
  end
end
