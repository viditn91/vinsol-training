require_relative '../lib/normal_rate.rb'
require_relative '../lib/seasonal_rate.rb'

module Display

  def self.show_results(hotels)
    hotels.each do |hotel|
      puts "\nFor HOTEL #{ hotel.name } -->"
      seasonal_days = 0
      total_price = 0

      if hotel.season_details?
        seasonal = SeasonalRate.cal_seasonal_rate(hotel)
        puts "SEASONAL Period:"
        seasons = seasonal.keys
        seasons.each do |season|
          seasonal_days += seasonal[season]['days']
          total_price += seasonal[season]['price']
          puts "Season of #{ season }: #{ seasonal[season]['days'] } Days @ #{ seasonal[season]['rate'] } p/d, Costs #{ seasonal[season]['price'] }"
        end
      else
        puts "No Seasonal Rates For this hotel"
      end

      normal = NormalRate.cal_normal_rate(hotel, seasonal_days)
      total_price += normal['price']
      puts "NORMAL Period:"
      puts "#{ normal['days'] } Days @ #{ normal['rate'] } p/d, Costs #{ normal['price'] }"
 
      tax_payable = (total_price * hotel.tax / 100).round(2)
      grand_total = total_price + tax_payable
      puts "Total Price = #{ total_price }, Tax = #{ tax_payable }, Grand Total = #{ grand_total }"
            
    end
  end
  
end