class User < ActiveRecord::Base
    
    has_one :manager
    has_one :staff
    validates :email, :username, uniqueness: true
    validates_presence_of :email, :password

    def self.last_request
        @@last_request
    end
end