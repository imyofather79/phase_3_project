# This is an _environment variable_ that is used by some of the Rake tasks to determine
# if our application is running locally in development, in a test environment, or in production
ENV['RACK_ENV'] ||= "development"

# Require in Gems
require 'bundler/setup'
Bundler.require(:default, ENV['RACK_ENV'])
require 'pry'
# require 'rack-cors'
# require './app/controllers/application_controller'
# Require in all files in 'app' directory
require_all 'app'
