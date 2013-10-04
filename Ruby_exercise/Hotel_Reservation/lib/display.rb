require_relative '../lib/normal_rate.rb'
require_relative '../lib/seasonal_rate.rb'

class Display

  def self.show_results(hotels)
    hotels.each do |hotel|
      puts "\nFor HOTEL #{ hotel.name } -->"
      
      normal = NormalRate.cal_normal_rate(hotel)
      puts "NORMAL Period:"
      puts "#{ normal['days'] } Days @ #{ normal['rate'] } p/d, Costs #{ normal['price'] }, Tax = #{ normal['tax'] }, Total = #{ normal['price'] + normal['tax'] }"
      
      if hotel.season_details?
        seasonal = SeasonalRate.cal_seasonal_rate(hotel)
        puts "SEASONAL Period:"
        seasons = seasonal.keys
        seasons.each do |season|
          puts "Season of #{ season }: #{ seasonal[season]['days'] } Days @ #{ seasonal[season]['rate'] } p/d, Costs #{ seasonal[season]['price'] },  Tax = #{ seasonal[season]['price'] * hotel.tax / 100 }, Total = #{ (seasonal[season]['price'] * (1 + hotel.tax / 100)).round(2) }"
        end
      else
        puts "No Seasonal Rates For this hotel"
      end
    end
  end
  
end