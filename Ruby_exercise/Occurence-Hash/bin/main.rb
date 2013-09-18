string = "the quick BROWN fox jumps over 23 lazy dogs".downcase
alphabet_hash = Hash.new(0)
string.each_char { |char| alphabet_hash[char] += 1 if char =~ /[a-z]/ }
p alphabet_hash.sort