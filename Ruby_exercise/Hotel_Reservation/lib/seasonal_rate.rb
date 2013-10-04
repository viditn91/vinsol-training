require 'date'
require_relative 'period.rb'

class SeasonalRate
  
  def self.cal_seasonal_rate(hotel)
    output = {}
    seasons = hotel.season_details
    seasons.each { |season| output[season.keys[0]] = self.days_falling_in_season(season.values[0]) }
    output
  end

  def self.days_falling_in_season(season)
    counter = 0
    start = self.generate_date(season["start"])
    finish = self.generate_date(season["end"])
    rate = season["rate"].to_i
    finish = finish >> 12 if start.mon > finish.mon
    (start..finish).each do |date| 
      counter += Period.occurences_in_range(date)
    end
    { "days" => counter, 
      "rate" => rate, 
      "price" => counter * rate
    }
  end

  def self.generate_date(string)
    string =~ /(\d\d)-(\d\d)/
    string = "0000-#{ $2 }-#{ $1 }"
    Date.parse(string)
  end

end