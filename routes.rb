require 'sinatra'
require 'shotgun'

get '/' do
	erb :index
end

get '/projects' do 
	erb :projects
end

get '/about' do 
	erb :about
end	