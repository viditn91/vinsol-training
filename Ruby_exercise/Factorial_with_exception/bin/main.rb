require_relative '../lib/integer.rb'

begin
  puts "enter a number_"
  input = gets.chomp
  number = Integer(input)
  p "factorial of #{ input } is #{ number.factorial }"
rescue ArgumentError
  p "factorial of #{ input } does not exist because it is not an Integer"
rescue NegativeValueError
  p "factorial of #{ input } does not exist because it is Negative"
end