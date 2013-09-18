require_relative '../lib/string.rb'
begin
  input = gets.chomp
  newString = String.new(input)
  p newString.palindrome?
end while not input =~ /^q$/i