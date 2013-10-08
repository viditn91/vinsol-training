class Interest
  attr_reader :principal, :time, :rate

  def initialize
    @principal, @time, @rate = yield
  end

  def get_difference
    "difference between simple and compound interest is #{ (cal_compInt - cal_simpleInt).round(2) }"
  end

  def cal_simpleInt
    return (1 + rate * time / 100) * principal
  end

  def cal_compInt
    return (1 + rate / 100) ** time * principal
  end
end