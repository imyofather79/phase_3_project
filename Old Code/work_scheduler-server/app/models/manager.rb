class Manager < ActiveRecord::Base
    
    has_many :work_days
    has_many :staffs, through: :work_days
    belongs_to :user
    validates :email, :username, uniqueness: true

end
