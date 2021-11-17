class DepartmentController < Sinatra::Base
  set :default_content_type, 'application/json'
 
        #index
        get '/department' do
          Department.all.to_json(:include => :department)
        end
      
        get '/department/last' do
          Department.last.to_json(:include => :department)
        end
      
      #create
        post '/department' do
              user = Department.create(
                username: params[:username],
                email: params[:email],
                password: params[:password],
                is_manager: params[:is_manager]
              )
              user.to_json
        end
      
        # Validator with username
        # get '/department/:username' do
        #   user = Department.find_by(username: params[:username])
          
        #   if user
        #     status 200
        #     user.to_json
        #   else
        #     status 401
        #     # user.to_json
        #   end
        # end
        get '/department/:id' do
          user = Department.find(params[:id])
          if user 
            status 200
            user.to_json(
                if user.is_manager
                {include: {manager: {only: [:first_name, :last_name, :department, :id, :email, :username, :password]}}}
                else
                {include:{staff: {only: [:first_name, :last_name, :paid_rate, :department, :username, :email, :password]}}}
                end
              )
          else 
            status 401
            { errors: "user doesn't exist" }.to_json
          end
        end
      
        #Validator with email
        get '/user/:format?' do
          
          user = Department.find_by(email: params[:email])
          if user
            status 200
            user.to_json
          else 
            status 401
          end
        end
      
        #update
        patch '/department/:id' do
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
        delete '/department/last' do
          user = Department.last.destroy
          user.to_json
        end
      
        delete '/department/:username' do
          user = Department.find_by(username: params[:username])
            user.delete
        end
      
      
      
      
      
      
      
      
        get '/users/home/:id' do
          user = Department.find(params[:id])
            user.to_json(
                if user.is_manager
                {include: {manager: {only: [:first_name, :last_name, :department, :user_id, :id, :email, :username, :password]}}}
                else
                {include:{staff: {only: [:first_name, :last_name, :paid_rate, :user_id, :department, :username, :email, :password]}}}
                end
              )
        end
      
        # # show
        # get "/users/:user_id" do
        #   @manager = Manager.find_by(user_id: params[:user_id])
        #   @manager.to_json(
        #    only: [:first_name, :last_name, :department, :id, :email, :username, :password, :user_id], include: {
        #      staffs: {only: [:first_name, :last_name, :paid_rate, :department, :username, :email, :password]}
        #   })
        # end

end

