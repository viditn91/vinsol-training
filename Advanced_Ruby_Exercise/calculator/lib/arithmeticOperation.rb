class ArithmeticOperation
  
  def calculate (opr1, operator, opr2)
    [opr1, opr2].reduce(operator)
  end 

end