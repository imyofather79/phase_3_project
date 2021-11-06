class CreateWorkDays < ActiveRecord::Migration[6.1]
    def change
        create_table    :work_days do |w|
            w.string    :day
            w.integer   :manager_id
            w.integer   :staff_id
            w.timestamps
        end
    end
end