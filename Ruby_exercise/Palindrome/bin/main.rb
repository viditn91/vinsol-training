require_relative '../lib/string.rb'
begin
  puts "enter a string...(q/Q to exit)"
  answer = gets.chomp
  break if answer =~ /^q$/i
  p answer.palindrome?  
end while 1