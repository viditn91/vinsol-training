class Integer
  def factorial_exists?
  	self >= 0
  end
  def factorial
    self > 0 ? (1..self).to_a.inject(:*) : 1 
  end
end