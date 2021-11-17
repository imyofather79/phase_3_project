class CreateUsers < ActiveRecord::Migration[6.1]
    def change
        create_table :users do |s|
            s.integer   :department_id
            s.string    :first_name
            s.string    :last_name
            s.decimal   :paid_rate
            s.string    :username
            s.string    :email
            s.string    :password
            s.boolean   :is_manager
            s.timestamps
        end
    end
end