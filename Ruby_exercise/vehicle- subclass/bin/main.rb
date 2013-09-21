require_relative '../lib/bike.rb'
vehicle1 = Vehicle.new("kawasaki", 1000)
bike1 = Bike.new("kawasaki", 1000, "Mike Motors")
bike1.modify_price(900)
p bike1