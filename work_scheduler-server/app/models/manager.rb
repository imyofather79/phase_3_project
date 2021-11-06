class Manager < ActiveRecord::Base
    belongs_to :user
    has_many :work_days
    has_many :staffs, through: :work_days
    validates :username, uniqueness: true

    # def full_name
    #     self.first_name + " " + self.last_name
    # end

    # def self.who_is_working_for_me
    #     self.staffs.map do |staff|
    #         if staff.department == manager.department
    #             staff.full_name
    #         else
    #             "You are on your own!"
    #         end
    #     end
    # end
end
