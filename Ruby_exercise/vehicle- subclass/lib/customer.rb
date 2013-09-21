class Vehicle
  def initialize(name, price)
    @name = name
    @price = price    
  end

  def modify_price(price)
    @price = price
  end

  def to_s
    [@name, @price]
  end
end