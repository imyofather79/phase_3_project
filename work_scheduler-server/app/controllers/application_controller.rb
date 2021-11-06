class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
 
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get '/users' do
    User.all.to_json(only: [:first_name, :last_name, :department, :id, :email, :username, :password, :is_manager])
  end

  get "/users/:username" do
    user = User.find_by(params[:username])
    if user
      user.to_json(only: [:first_name, :last_name, :department, :id, :email, :username, :password, :is_manager], include: {
          staffs: {only: [:first_name, :last_name, :paid_rate, :department, :username, :email, :password]}, include: {
          managers: {only: [:first_name, :last_name, :department, :id, :email, :username, :password]
        }}
    })
    else
      status 401
      { errors: "user doesn't exist" }.to_json
    end
  end

  post "/users" do
    user = User.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      username: params[:username],
      email: params[:email],
      password: params[:password],
      is_manager: params[:is_manager]
    )
    user.to_json
  end

  patch "/users/:id" do
    user = User.find(params[:id])
    user.update(
      username: params[:username],
      email: params[:email],
      password: params[:password]
    )
    user.to_json
  end

  delete "/users/:id" do
    user = User.find(params[:id])
    user.destroy
    user.to_json
  end

  get "/managers" do
    Manager.all.to_json
  end

  get "/managers/:id" do
    manager = Manager.find_by(params[:id])
    manager.to_json(only: [:first_name, :last_name, :department, :id, :email, :username, :password, :user_id], include: {
      work_days: { only: [:day], include: {
        staffs: {only: [:first_name, :last_name, :paid_rate, :department, :username, :email, :password, :user_id]}
      }}
    })
  end

  post "/managers" do
    managers = Manager.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      department: params[:department],
      username: params[:username],
      email: params[:email],
      password: params[:password],
      is_manager: params[:is_manager]
    )
    managers.to_json
  end

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

  delete '/managers/:id' do
    managers = Manager.find(params[:id])
    managers.destroy
    managers.to_json
  end

  get '/staffs' do
    staffs = Manager.all
    staffs.to_json
  end
  
  get "/staffs/:id" do
    staff = Staff.find_by(params[:id])
    if staff
      staff.to_json
    else
      status 401
      { errors: "user doesn't exist" }.to_json
    end
  end

  post '/staffs' do
    staffs = Staff.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      paid_rate: params[:paid_rate],
      department: params[:department],
      is_manager: params[:is_manager],
      username: params[:username],
      email: params[:email],
      password: params[:password]
    )
    staffs.to_json
  end

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

  delete '/staffs/:id' do
    staffs = Staff.find(params[:id])
    staffs.destroy
    staffs.to_json
  end



end
