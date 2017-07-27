# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bit.delete_all
OtherMaterial.delete_all
Invention.delete_all

Bit.create([{name: "bargraph"},{name: "bend-sensor"},{name: "branch"},{name: "bright-led"}])
OtherMaterial.create([{name: "scissors"}, {name: "tape"}, {name: "construction-paper"}])
inv = Invention.new({title: "inv 1", description: "des inv 1", user_name: "test1", email: "test1@us.com"})
inv.bits = [Bit.all[1]]
inv.save
