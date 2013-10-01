require_relative '../lib/integer.rb'
begin
  puts "enter a number_"
  number = gets.to_i
  p number < 0 ? raise : number.factorial
rescue 
  p "factorial of #{ number } does not exist because it is negative"
end