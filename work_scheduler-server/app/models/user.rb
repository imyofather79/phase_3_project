class User < ActiveRecord::Base
    
    belongs_to :department
    validates :email, :username, uniqueness: true
    validates_presence_of :email, :password


end