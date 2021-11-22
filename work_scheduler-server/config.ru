require 'sinatra'

require_relative "./config/environment"
# require_relative "./controllers/user_controller.rb"
# require_relative "./controllers/department_controller.rb"

# Allow CORS (Cross-Origin Resource Sharing) requests
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
  end
end

# Parse JSON from the request body into the params hash
use Rack::JSONBodyParser

# Our application
run ApplicationController
use DepartmentController
use UserController
