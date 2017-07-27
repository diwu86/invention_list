class CreateJoinTableInventionOtherMaterial < ActiveRecord::Migration[5.0]
  def change
    create_join_table :inventions, :other_materials do |t|
       #t.index [:invention_id, :other_material_id]
       #t.index [:other_material_id, :invention_id]
    end
  end
end
