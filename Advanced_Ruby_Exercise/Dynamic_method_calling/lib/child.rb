class Child < String
  def exclude?(args)
    result = []
    args.each { |el| el.strip! }.each do |element|
       result << !include?(element)
    end
    result
  end
  def palindrome?
    downcase == reverse.downcase
  end
  def vowel_count
    count = 0
    each_char { |char| count += 1 if char =~ /[aeiou]/i }
    count 
  end
end