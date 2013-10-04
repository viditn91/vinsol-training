require 'json'
require 'date'
require_relative '../lib/hotel.rb'
require_relative '../lib/period.rb'
require_relative '../lib/display.rb'

data = File.read (File.dirname(__FILE__) + "/../lib/hotels.json")
data = JSON.parse(data)
hotels = []
data.each { |el| hotels << Hotel.new(el)}

puts "enter check-in date (yyyy-mm-dd)"
check_in = gets.chomp
puts "enter check-out date (yyyy-mm-dd)"
check_out = gets.chomp


Period::RANGE = (Date.parse(check_in)..Date.parse(check_out))

Display.show_results(hotels)