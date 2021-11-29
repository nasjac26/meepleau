# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Game.delete_all
GameNight.delete_all


resp = RestClient::Request.execute(method: :get,
    url: "https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=nhcfo4R0Ig",
    headers:{
        'Content-Type': 'application/json'
    })
    games_data = JSON.parse(resp.body)
    games = games_data

    byebug

    # games.each do |game|
    #     Game.create(title: game["games"]["name"])
    # end




puts "Seeding Users 🐱☕🐱☕🐱☕"


sando = User.create(username: "Sand0", password: "password")

puts "Seeding Games (There is alot...)"





puts "Seeding Finished!"