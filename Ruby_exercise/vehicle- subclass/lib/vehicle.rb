class Vehicle
  def initialize(name, price)
    @name = name
    @price = price    
  end

  def modify_price(price)
    @price = price
  end

  def to_s
    @dealer ? [@name, @price, @dealer] : [@name, @price]
  end
end