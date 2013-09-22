require_relative 'vehicle.rb'
class Bike < Vehicle
  def initialize(name, price, dealer)
    super(name, price)
    @dealer = dealer
  end

  def to_s
    "#{ super } and dealer:#{ @dealer }"
  end
end