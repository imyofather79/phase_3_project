class AddLoginInfoToManagers < ActiveRecord::Migration[6.1]
    def change
      add_column :managers, :username, :string
      add_column :managers, :email, :string
      add_column :managers, :password, :string
    end
end
  