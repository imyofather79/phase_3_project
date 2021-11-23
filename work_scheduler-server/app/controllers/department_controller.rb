class DepartmentController < Sinatra::Base
  set :default_content_type, 'application/json'
 
        #index
        get '/departments' do
          Department.all.to_json(:include => :users)
        end
      
        get '/departments/:department' do
          department = Department.find_by(department: params[:department])
          department.to_json(:include => :users)
        end
      


end

