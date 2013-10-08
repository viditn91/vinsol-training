require_relative 'period'

module NormalRate
  
  def self.cal_normal_rate(hotel, seasonal_days)
    normal_days = Period.no_of_days - seasonal_days
    output = { 
      "days" => normal_days, 
      "rate" => hotel.rate, 
      "price" => hotel.rate * normal_days,
    }
  end

end