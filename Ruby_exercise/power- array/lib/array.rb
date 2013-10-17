class Array
  def power(exponent)
    map { |element| element **= exponent }
  end
end