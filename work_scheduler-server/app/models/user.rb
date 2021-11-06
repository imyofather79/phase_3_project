class User < ActiveRecord::Base
    has_many :managers
    has_many :staffs, through: :managers
    validates :username, uniqueness: true
end