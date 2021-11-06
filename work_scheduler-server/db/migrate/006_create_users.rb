class CreateUsers < ActiveRecord::Migration[6.1]
    has_many :managers
    has_many :staffs

    def change
        create_table :users do |m|
            m.string :first_name
            m.string :last_name
            m.string :department
            m.string :username
            m.string :email
            m.string :password
            m.boolean :is_manager
            m.timestamps
        end
    end
end