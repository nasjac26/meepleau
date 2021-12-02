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


#this stores boardgameatlas API information in a variable to .each through for seed data

resp = RestClient::Request.execute(method: :get,
    url: "https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=nhcfo4R0Ig",
    headers:{
        'Content-Type': 'application/json'
    })
    games_data = JSON.parse(resp.body)
    games = games_data.first
    open('myfile.out', 'w') do |f|
        f << games
    end
    
    games_list = games[1]
   


    puts "Seeding Games (There is alot...)"

    games_list.each do |game|
        Game.create(
            title: game["name"],
            genre: game["genre"],
            msrp: game["msrp"],
            year_published: game["year_published"],
            min_players: game["min_players"],
            max_players: game["max_players"],
            min_playtime: game["min_playtime"],
            max_playtime: game["max_playtime"],
            min_age: game["min_age"],
            description_preview: game["description_preview"],
            thumb_image: game["images"]["thumb"],
            small_image: game["images"]["small"],
            medium_image: game["images"]["medium"],
            large_image: game["images"]["large"],
            original_image: game["images"]["original"],

        )
    end




puts "Seeding Users 🐱☕🐱☕🐱☕"


sando = User.create(username: "Sand0", password: "password")



puts "Seeding some GameNights !!!!"

GameNight.create(user_id: 1, game_id: 1)


puts "Seeding Finished!"