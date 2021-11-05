class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get '/managers' do
    managers = Manager.all
    managers.to_json
  end

  get '/managers/who_is_working_for_me' do
    manager = Manager.who_is_working_for_me
    manager.to_json
  end

  post '/managers' do
    managers = Manager.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      department: params[:department]
    )
    managers.to_json
  end

  patch '/managers/:id' do
    managers = Manager.find(params[:id])
    managers.update(
      first_name: params[:first_name],
      last_name: params[:last_name],
      department: params[:department]
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

  get '/staffs/who_is_my_boss' do
    staff = Staff.who_is_my_boss
    staff.to_json
  end
  
  post '/staffs' do
    staffs = Manager.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      paid_rate: params[:paid_rate],
      department: params[:department]
    )
    staffs.to_json
  end

  patch '/staffs/:id' do
    staffs = Manager.find(params[:id])
    staffs.update(
      first_name: params[:first_name],
      last_name: params[:last_name],
      paid_rate: params[:paid_rate],
      department: params[:department]
    )
  end

  delete '/staffs/:id' do
    staffs = Manager.find(params[:id])
    staffs.destroy
    staffs.to_json
  end



end
