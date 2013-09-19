class String
  def find_occurence
    alphabet_hash = Hash.new(0)
    self.downcase.each_char{ |char| alphabet_hash[char] += 1 if char =~ /[a-z]/ }
    alphabet_hash
  end
end