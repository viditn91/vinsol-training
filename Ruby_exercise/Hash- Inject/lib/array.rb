class Array
  def to_hash
    hash = Hash.new{ |h, k| h[k] = [] }
    self.inject do |key, value|
      hash[value.to_s.size] << value
    end
    to_groupedHash(hash)
  end
  
  def to_groupedHash(hash)
    hash.inject(Hash.new{ |h, k| h[k] = [] }) do |h, (key, value)|
      key.even? ? h["even"] << value : h["odd"] << value 
      h
    end
  end
end