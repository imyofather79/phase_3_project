class WorkDay < ActiveRecord::Base
    belongs_to :manager
    belongs_to :staff
        
end