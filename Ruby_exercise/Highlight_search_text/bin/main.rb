require_relative '../lib/string.rb'
newString = String.new("Can you can a can as a canner can can a can")
occurences = newString.highlight_search('can')
p newString
p "Total occurence found: #{occurences}"