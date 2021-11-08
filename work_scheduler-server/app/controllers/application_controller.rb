class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
 
  get "/" do
    { message: "Test" }.to_json
  end

  get '/registration' do
    User.all.to_json
  end

  post '/registration' do
    user = User.create(
      email: params[:email],
      password: params[:password],
      is_manager: params[:is_manager]
    )
    user.to_json
    session[:user_id] = user.id
    redirect '/registration/signup'
  end

  get '/registration/signup' do
      user = User.last
      user.to_json
  end

  delete '/registration/signup' do
    user = User.last.destroy
    user.to_json
  end

  # post '/registration/signup' do
  #     user = User.last
  #     if !user.is_manager
  #       staff = Staff.create(
  #         first_name: params[:first_name],
  #         last_name: params[:last_name],
  #         department: params[:department],
  #         paid_rate: params[:paid_rate],
  #         username: params[:username],
  #         email: params[:email],
  #         password: params[:password],
  #         is_manager: params[:is_manager]
  #   )
  #   staff.to_json

  #     else 
  #       manager = Manager.create(
  #           first_name: params[:first_name],
  #           last_name: params[:last_name],
  #           department: params[:department],
  #           user_id: params[:user_id],
  #           username: params[:username],
  #           email: params[:email],
  #           password: params[:password],
  #           is_manager: params[:is_manager]
  #       )
  #       manager.to_json
  #     end
  #     if user.is_manager == true
  #       manager = Manager.create(
  #           first_name: params[:first_name],
  #           last_name: params[:last_name],
  #           department: params[:department],
  #           user_id: params[:user_id],
  #           username: params[:username],
  #           email: params[:email],
  #           password: params[:password],
  #           is_manager: params[:is_manager]
  #       )
  #       manager.to_json
  #     else 
  #       staff = Staff.create(
  #           first_name: params[:first_name],
  #           last_name: params[:last_name],
  #           department: params[:department],
  #           paid_rate: params[:paid_rate],
  #           username: params[:username],
  #           email: params[:email],
  #           password: params[:password],
  #           is_manager: params[:is_manager]
  #     )
  #     staff.to_json
  #     end
  # end

  get '/sessions/login' do
    # erb :'sessions/login'
  end

  post '/sessions' do
    user = User.create(
      email: params[:email], 
      password: params[:password], 
      is_manager: params[:is_manager]
    )
  if user
    session[:user_id] = user.id
    redirect '/users/home'
  end
  redirect '/sessions/login'
  
  end

  get '/sessions/logout' do 
    session.clear
    # redirect '/'
  end

  get '/users/home/:id' do
    @user = User.find(session[:id])
    # erb :'/users/home'
  end

  patch '/users/home:id' do
    @user = User.find(session[:id])
    if !!user.is_manager
      manager = Manager.update(
          first_name: params[:first_name],
          last_name: params[:last_name],
          department: params[:department],
          username: params[:username],
          email: params[:email],
          password: params[:password],
          is_manager: params[:is_manager]
      )
      manager.to_json
    else 
      staff = Staff.update(
          first_name: params[:first_name],
          last_name: params[:last_name],
          department: params[:department],
          paid_rate: params[:paid_rate],
          username: params[:username],
          email: params[:email],
          password: params[:password],
          is_manager: params[:is_manager]
      )
    staff.to_json
    end
  end
#   get"/users/:id" do
#     user = User.find(params[:id])
#   if !!user
#     user.to_json()
#   else
#     status 401
#     { errors: "user doesn't exist" }.to_json
#   end
# end

  # index
  # get '/users' do
  #   User.all.to_json(only: [:first_name, :last_name, :department, :id, :email, :username, :password, :is_manager])
  # end

  # show
  # get "/users/:username" do 
  #   user = User.find_by(:username => params[:username])
  #   if !!user
  #     user.to_json(only: [:first_name, :last_name, :department, :id, :email, :username, :password, :is_manager], include: {
  #         staffs: {only: [:first_name, :last_name, :paid_rate, :department, :username, :email, :password]}, include: {
  #         managers: {only: [:first_name, :last_name, :department, :id, :email, :username, :password]
  #       }}
  #   })
  #   else
  #     status 401
  #     { errors: "user doesn't exist" }.to_json
  #   end
  # end

  # create
  # post "/users" do
  #   user = User.create(
  #     first_name: params[:first_name],
  #     last_name: params[:last_name],
  #     username: params[:username],
  #     email: params[:email],
  #     password: params[:password],
  #     is_manager: params[:is_manager]
  #   )
  #   user.to_json
  # end

  # update
  # patch "/users/:id" do
  #   user = User.find(params[:id])
  #   user.update(
  #     username: params[:username],
  #     email: params[:email],
  #     password: params[:password]
  #   )
  #   user.to_json
  # end

  # delete
  # delete "/users/:id" do
  #   user = User.find(params[:id])
  #   user.destroy
  #   user.to_json
  # end

  # index
  get "/managers" do
    Manager.all.to_json()
  end

  # show
  get "/managers/:id" do
    manager = Manager.find(params[:id])
    manager.to_json(
     only: [:first_name, :last_name, :department, :id, :email, :username, :password, :user_id], include: {
       staffs: {only: [:first_name, :last_name, :paid_rate, :department, :username, :email, :password]}
    })
  end

  # create
  post "/managers" do
    managers = Manager.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      department: params[:department],
      user_id: params[:user_id],
      username: params[:username],
      email: params[:email],
      password: params[:password],
      is_manager: params[:is_manager]
    )
    managers.to_json
  end

  # update
  patch '/managers/:id' do
    managers = Manager.find(params[:id])
    managers.update(
      first_name: params[:first_name],
      last_name: params[:last_name],
      department: params[:department],
      username: params[:username],
      email: params[:email],
      password: params[:password],
      is_manager: params[:is_manager]
    )
  end

  # delete
  delete '/managers/:id' do
    managers = Manager.find(params[:id])
    managers.destroy
    managers.to_json
  end

  # index
  get '/staffs' do
    staffs = Staff.all
    staffs.to_json
  end
  
  # show
  get "/staffs/:id" do
    staff = Staff.find(params[:id])
      staff.to_json(only: [:first_name, :last_name, :department, :id, :email, :username, :password, :user_id, :paid_rate], include: {
        managers: {only: [:first_name, :last_name, :department]}
     })
  end


  post "/staffs" do
    staffs = Staff.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      department: params[:department],
      paid_rate: params[:paid_rate],
      user_id: params[:user_id],
      username: params[:username],
      email: params[:email],
      password: params[:password],
      is_manager: params[:is_manager]
    )
    staffs.to_json
  end

  # update
  patch '/staffs/:id' do
    staffs = Staff.find(params[:id])
    staffs.update(
      first_name: params[:first_name],
      last_name: params[:last_name],
      paid_rate: params[:paid_rate],
      department: params[:department],
      is_manager: params[:is_manager],
      username: params[:username],
      email: params[:email],
      password: params[:password]
    )
  end

  # delete
  delete '/staffs/:id' do
    staffs = Staff.find(params[:id])
    staffs.destroy
    staffs.to_json
  end


end

