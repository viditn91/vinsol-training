require_relative '../lib/integer.rb'
puts "enter a number_"
number = gets.to_i
puts number.factorial_exists? ? "factorial of #{ number } is #{ number.factorial }" : "factorial does not exist"