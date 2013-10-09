require_relative '../lib/interest.rb'
puts "enter principal_"
principal = gets.chomp
puts "enter time period_"
time = gets.chomp
interests = Interest.new { [principal.to_i, time.to_i ] }
p "The difference between Simple and Compound Interest is #{ interests.get_difference }"