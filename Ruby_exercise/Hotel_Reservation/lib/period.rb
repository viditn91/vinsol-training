module Period
  
  def self.no_of_days
    RANGE.to_a.size
  end

  def self.occurences_in_range(day)
    RANGE.select { |test| test.mon == day.mon && test.mday == day.mday }.size
  end

end