class Array
  def to_hash
    hash = Hash.new{ |hash, key| hash[key] = [] }
    for element in self
      hash[element.to_s.size].push(element)
    end
    to_groupedHash(hash)
  end
  
  def to_groupedHash(hash)
    grouped_hash = Hash.new{ |grouped_hash, key| grouped_hash[key] = [] }
    for key in hash.keys
      key.even? ? grouped_hash["even"].push(hash[key]) : grouped_hash["odd"].push(hash[key])
    end
    grouped_hash
  end
end