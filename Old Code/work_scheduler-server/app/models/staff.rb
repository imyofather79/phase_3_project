class Staff < ActiveRecord::Base
    
    has_many :work_days 
    has_many :managers, through: :work_days
    belongs_to :user
    validates :email, :username, uniqueness: true




end