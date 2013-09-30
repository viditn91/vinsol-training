class String
  def count_range
    character_count = Hash.new(0) 
    lowcase, upcase, digit = 'a'..'z', 'A'..'Z', '0'..'9'
    self.each_char do |char|
      case char
      when lowcase
        character_count["lowercase_count"] += 1
      when upcase
        character_count["uppercase_count"] += 1
      when digit
        character_count["numbers_count"] += 1
      else
        character_count["special_count"] += 1
      end
    end
    character_count
  end
end