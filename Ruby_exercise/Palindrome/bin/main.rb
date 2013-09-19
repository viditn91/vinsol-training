require_relative '../lib/string.rb'
begin
  newString = String.new(gets.chomp.downcase)
  p newString.palindrome?
end while not newString =~ /^q$/i