class CreateWorkDays < ActiveRecord::Migration[6.1]
    def change
        create_table :work_days do |m|
            m.belongs_to :manager, foreign_key: true
            m.belongs_to :staff, foreign_key: true
            m.string :day
            m.timestamps
        end
    end
end