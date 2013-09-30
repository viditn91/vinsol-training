class Interest
  attr_accessor :p, :t, :r

  def get_difference
    "difference between simple and compound interest is #{ cal_compInt - cal_simpleInt }"
  end

  def cal_simpleInt
    return (1 + r * t / 100) * p
  end

  def cal_compInt
    return (1 + r / 100) ** t * p
  end
end