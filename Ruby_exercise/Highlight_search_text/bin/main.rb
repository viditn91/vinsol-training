require_relative '../lib/string.rb'

puts "enter a string_"
inputString = gets.chomp
puts "enter pattern to search_"
pattern = gets.chomp
occurences = inputString.highlight_search(pattern)
p inputString
p "Total occurence found: #{occurences}"