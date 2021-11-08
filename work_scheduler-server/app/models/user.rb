class User < ActiveRecord::Base
    
    has_one :manager
    has_one :staff
    validates :email, uniqueness: true
    validates_presence_of :email, :password
end