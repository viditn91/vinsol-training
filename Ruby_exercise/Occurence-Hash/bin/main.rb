string = "the quick brown fox jumps over a lazy dog".delete(' ')
alphabet_hash = Hash.new(0)
string.each_char { |n| alphabet_hash[n] += 1 }
p alphabet_hash.sort