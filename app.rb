# frozen_string_literal: true

require 'rubygems'
require 'sinatra'
require 'sqlite3'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require './model/Product'

# set :database, {:adapter => 'sqlite3', :database => 'PizzaShop.sqlite3'}
# before do
# end
# подключение при загрузке страницы html.erb
configure do
  def herb(template, options = {}, locals = {})
    render 'html.erb', template, options, locals
  end
  Tilt.register Tilt::ERBTemplate, 'html.erb'
end

get '/' do
  # для отображения каталога на титульной странице
  @products = Product.all
  herb :index
end

get '/about' do
  herb :about
end
