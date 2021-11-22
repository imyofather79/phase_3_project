class UserController < Sinatra::Base
  set :default_content_type, 'application/json'

#index
  get '/users' do
    User.all.to_json(:include => :department)
  end

  get '/users/signup' do
    User.last.to_json(:include => :department)
  end

#create
  post '/users/registration' do
        user = User.create(
          department_id: params[:department_id],
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

  #Validator with username
  get '/users/:username' do
    user = User.find_by(username: params[:username])
    if user 
      status 200
      user.to_json(:include => :department)
    else 
      status 401
      { errors: "user doesn't exist" }.to_json
    end
  end

  #Validator with email
  get '/user/:format?' do
    
    user = User.find_by(email: params[:email])
    if user
      status 200
      user.to_json(:include => :department)
    else 
      status 401
    end
  end

  #update
  patch '/users/:id' do
    user = User.find(params[:id])
      user.update(
   
          paid_rate: params[:paid_rate]
  
        )
      user.to_json
  end

  #destroy

  delete '/users/home/:id' do
    user = User.find(params[:id])
      user.delete
  end

  

end

