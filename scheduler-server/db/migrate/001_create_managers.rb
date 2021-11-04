class CreateManagers < ActiveRecord::Migration[6.1]
    def change
        create_table :managers do |m|
            m.string :first_name
            m.string :last_name
            m.timestamps
        end
    end
end