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
      
       
        #update
        patch '/departments/:id' do
          user = Department.find(params[:id])
            user.update(
              department: params[:department_id],
              first_name: params[:first_name],
              last_name: params[:last_name],
              paid_rate: params[:paid_rate],
              username: params[:username],
              email: params[:email],
              password: params[:password],
              is_manager: params[:is_manager]
              )
              user.to_json(:include => :department)
        end
      
        #destroy
      
        delete '/departments/:id' do
          user = Department.find_by(username: params[:username])
            user.delete
        end


end

