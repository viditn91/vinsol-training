require_relative 'period'

class NormalRate
  
  def self.cal_normal_rate(hotel)
    days = Period.no_of_days
    output = { 
      "days" => days, 
      "rate" => hotel.rate, 
      "price" => hotel.rate * days,
      "tax" => hotel.rate * days * hotel.tax / 100 
    }
  end

end