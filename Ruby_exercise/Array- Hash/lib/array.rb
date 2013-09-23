class Array
  def to_hash
    hash = Hash.new{ |hash, key| hash[key] = [] }
    for element in self
      hash[element.to_s.size].push(element)
    end
    hash
  end
end