class Interest
  def initialize(principal, time, rate, &block)
    @p = principal.to_i
    @t = time.to_i
    @r = rate.to_f
    @block = block 
  end

  def get_difference
    "difference between simple and compound interest is #{ @block.call(cal_simpleInt, cal_compInt) }"
  end

  def cal_simpleInt
    return (1 + (@r * @t) / 100) * @p
  end

  def cal_compInt
    return (1 + (@r) / 100) ** @t * @p
  end
end