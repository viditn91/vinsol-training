class Integer
  def factorial
    self > 0 ? (1..self).to_a.inject(:*) : self == 0 ? 1 : false
  end
end