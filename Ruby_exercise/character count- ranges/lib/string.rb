class String
  def count_range
    character_count = Hash.new(0) 
    self.each_char do |char|
      case char
      when 'a'..'z'
        character_count["lowercase_count"] += 1
      when 'A'..'Z'
        character_count["uppercase_count"] += 1
      when '0'..'9'
        character_count["numbers_count"] += 1
      else 
        character_count["special_count"] += 1
      end
    end
    character_count
  end
end