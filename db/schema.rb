# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170730142731) do

  create_table "bits", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bits_inventions", id: false, force: :cascade do |t|
    t.integer "invention_id", null: false
    t.integer "bit_id",       null: false
    t.index ["bit_id", "invention_id"], name: "index_bits_inventions_on_bit_id_and_invention_id"
    t.index ["invention_id", "bit_id"], name: "index_bits_inventions_on_invention_id_and_bit_id"
  end

  create_table "inventions", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "user_name"
    t.string   "email"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "image"
  end

  create_table "inventions_other_materials", id: false, force: :cascade do |t|
    t.integer "invention_id",      null: false
    t.integer "other_material_id", null: false
  end

  create_table "other_materials", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
