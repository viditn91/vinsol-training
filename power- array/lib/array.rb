class Array
  def power(exponent)
    self.each_with_index { |value, index| self[index] = value ** exponent }
  end
end