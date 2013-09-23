require_relative '../lib/string.rb'
loop do
  puts "enter a string...(q/Q to exit)"
  answer = gets.chomp
  case answer
  when /^q$/i
    break
  else
    answer.downcase.palindrome?
  end
end