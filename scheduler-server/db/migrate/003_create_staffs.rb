class CreateStaffs < ActiveRecord::Migration[6.1]
    def change
        create_table    :staffs do |s|
            s.string    :first_name
            s.string    :last_name
            s.integer   :paid_rate
            s.timestamps
        end
    end
end