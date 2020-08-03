require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require './model/Product'

def herb(template, options={}, locals={})
	render "html.erb", template, options, locals
end


get '/' do
  herb :index
end

get '/about' do
  herb :about
end
