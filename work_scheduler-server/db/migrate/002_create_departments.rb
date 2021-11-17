class CreateDepartments < ActiveRecord::Migration[6.1]
    def change
        create_table :departments do |m|
            m.string    :department
            m.timestamps
        end
    end
end