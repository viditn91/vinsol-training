class Array
  def power(exponent)
    "#{ self } raise to #{ exponent } is #{ collect { |element| element **= exponent } }"
  end
end