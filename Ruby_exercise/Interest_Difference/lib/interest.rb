class Interest
  attr_reader :principal, :time
  Rate = 10.0 

  def initialize
    @principal, @time = yield
  end
  def get_difference
    (cal_compInt - cal_simpleInt).round(2)
  end
  def cal_simpleInt
    return (1 + rate * time / 100) * principal
  end
  def cal_compInt
    return (1 + rate / 100) ** time * principal
  end
  def rate
    Rate
  end
end