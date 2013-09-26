class Integer
  def factorial
    self > 0 ? (1..self).to_a.inject(:*) : 1
  end
end