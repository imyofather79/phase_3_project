class CreateSchedules < ActiveRecord::Migration[6.1]
    def change
        create_table    :schedules do |s|
            s.text      :day
            s.integer   :manager_id
            s.integer   :staff_id
            s.timestamps
        end
    end
end