# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 4) do

  create_table "managers", force: :cascade do |t|
    t.integer "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "department"
    t.string "username"
    t.string "email"
    t.string "password"
    t.boolean "is_manager"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_managers_on_user_id"
  end

  create_table "staffs", force: :cascade do |t|
    t.integer "user_id"
    t.string "first_name"
    t.string "last_name"
    t.integer "paid_rate"
    t.string "department"
    t.string "username"
    t.string "email"
    t.string "password"
    t.boolean "is_manager"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_staffs_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password"
    t.boolean "is_manager"
  end

  create_table "work_days", force: :cascade do |t|
    t.integer "manager_id"
    t.integer "staff_id"
    t.string "day"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["manager_id"], name: "index_work_days_on_manager_id"
    t.index ["staff_id"], name: "index_work_days_on_staff_id"
  end

  add_foreign_key "managers", "users"
  add_foreign_key "staffs", "users"
  add_foreign_key "work_days", "managers"
  add_foreign_key "work_days", "staffs"
end
