class CreateDepartments < ActiveRecord::Migration[6.1]
    def change
        create_table :departments do |m|
            m.string    :department
        end
    end
end