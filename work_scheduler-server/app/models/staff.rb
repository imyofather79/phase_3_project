class Staff < ActiveRecord::Base
    has_many :work_days 
    has_many :managers, through: :work_days
    belongs_to :user

    def full_name
        self.first_name + " " + self.last_name
    end

    def self.who_is_my_boss
        self.managers.map do |manager|
            manager.full_name
        end
    end

    def self.staff_by_department(department)
        self.where(department: department)
    end
end