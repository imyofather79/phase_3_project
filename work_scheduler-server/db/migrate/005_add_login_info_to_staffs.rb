class AddLoginInfoToStaffs < ActiveRecord::Migration[6.1]
    def change
      add_column :staffs, :username, :string
      add_column :staffs, :email, :string
      add_column :staffs, :password, :string
    end
end
  