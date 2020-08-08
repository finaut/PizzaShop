# frozen_string_literal: true

require 'rubygems'
require 'sinatra'
require 'sqlite3'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require './model/Product'


def herb(template, options = {}, locals = {})
  render 'html.erb', template, options, locals
end

Tilt.register Tilt::ERBTemplate, 'html.erb'

get '/' do
  # для отображения каталога на титульной странице
  @products = Product.all
  herb :index
end

get '/about' do
  herb :about
end

post '/cart' do
  # задача получить значения из orders
  orders  = params[:orders]
  @orders = parse_orders_line orders  #  запускаем нашу функцию


  erb "Hello ! #{parse_orders_line orders}"
end


# метод для обработки элемента
#
def parse_orders_line orders
  string1 = orders.split(/,/)
  arr = []

  string1.each do |x|
    # определяем новые переменную
    string2 = x.split(/=/)
    string3 = string2[0].split(/_/)

    id = string3[1]
    cnt = string2[1]

    arr2 = [id, cnt]

    arr.push( arr2)
  end
  return arr.inspect
end