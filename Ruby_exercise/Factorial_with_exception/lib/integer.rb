class Integer
  def factorial
    "factorial of #{ self } is #{ self > 0 ? (1..self).to_a.inject(:*) : 1 }"  
  end
end