class User < ActiveRecord::Base
    has_many :managers
    has_many :staffs
        
end