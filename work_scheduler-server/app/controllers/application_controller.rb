class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
 
  configure do
    set :public_folder, 'public'
  end

  get "/" do
    { message: "Test" }.to_json
  end


end

