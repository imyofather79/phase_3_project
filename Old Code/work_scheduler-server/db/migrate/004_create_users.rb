class CreateUsers < ActiveRecord::Migration[6.1]
    def change
        create_table :users do |m|
            m.string :username
            m.string :email
            m.string :password
            m.boolean :is_manager
        end
    end
end