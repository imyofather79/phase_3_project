class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
 
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get '/managers' do
    managers = Manager.all
    managers.to_json
  end

  # get "/managers/:id" do
  #   manager = Managers.find_by(params[:id])
  #   manager.to_json(only: [:first_name, :last_name, :department, :id, :email, :username], include: {
  #     work_days: { only: [:day], include: {
  #       staffs: {only: [:first_name, :last_name, :paid_rate, :department, :username, :email, :password]}
  #     }}
  #   })
  # end

  get "/users" do
    users = User.all
    users.to_json
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

  post '/managers' do
    managers = Manager.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      department: params[:department],
      email: params[:email],
      password: params[:password]
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
      password: params[:password]
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

  # get '/staffs/who_is_my_boss' do
  #   staff = Staff.who_is_my_boss
  #   staff.to_json
  # end
  
  get "/staffs/:email" do
    staff = Staff.find_by(params[:email])
    if staff
      staff.to_json
    else
      status 401
      { errors: "user doesn't exist" }.to_json
    end
  end

  post '/staffs' do
    staffs = Manager.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      paid_rate: params[:paid_rate],
      department: params[:department],
      username: params[:username],
      email: params[:email],
      password: params[:password]
    )
    staffs.to_json
  end

  patch '/staffs/:id' do
    staffs = Manager.find(params[:id])
    staffs.update(
      first_name: params[:first_name],
      last_name: params[:last_name],
      paid_rate: params[:paid_rate],
      department: params[:department],
      username: params[:username],
      email: params[:email],
      password: params[:password]
    )
  end

  delete '/staffs/:id' do
    staffs = Manager.find(params[:id])
    staffs.destroy
    staffs.to_json
  end



end
