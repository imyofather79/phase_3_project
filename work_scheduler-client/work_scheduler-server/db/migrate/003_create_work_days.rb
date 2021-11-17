class CreateWorkDays < ActiveRecord::Migration[6.1]
    def change
        create_table :work_days do |m|
            m.integer   :manager_id
            m.integer   :staff_id
            m.string :day
            m.timestamps
        end
    end
end