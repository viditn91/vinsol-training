require_relative '../lib/integer.rb'
puts "enter a number_"
number = gets.to_i
factorial = number.factorial
puts factorial ? "factorial of #{ number } is #{ factorial }" : "factorial does not exist"