class NegativeValueError < RuntimeError
end

class Integer
  
  def factorial
    if self > 0 then self * (self - 1).factorial
    elsif self == 0 then 1
    else raise NegativeValueError
    end
  end

end