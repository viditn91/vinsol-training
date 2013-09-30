class Integer
  def factorial
    "factorial : #{ self > 0 ? (1..self).to_a.inject(:*) : self == 0 ? 1 : "does not exist" }"  
  end
end