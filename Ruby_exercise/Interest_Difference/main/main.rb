require_relative '../lib/interest.rb'
puts "enter principal_"
principal = gets.chomp
puts "enter time period_"
time = gets.chomp
rate = 10
interests = Interest.new(principal, time, rate) { |simple, compound| compound - simple }
p interests.get_difference