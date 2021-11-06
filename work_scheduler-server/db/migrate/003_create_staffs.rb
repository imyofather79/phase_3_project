class CreateStaffs < ActiveRecord::Migration[6.1]
    def change
        create_table    :staffs do |s|
            s.string    :first_name
            s.string    :last_name
            s.integer   :paid_rate
            s.string    :department
            s.string    :username
            s.string    :email
            s.string    :password
            s.integer   :user_id
            s.boolean :is_manager
            s.timestamps
        end
    end
end