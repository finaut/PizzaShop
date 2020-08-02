#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'

def herb(template, options={}, locals={})
	render "html.erb", template, options, locals
end


get '/' do
  herb :index
end