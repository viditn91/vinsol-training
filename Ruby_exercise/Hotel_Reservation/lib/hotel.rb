class Hotel
  
  def initialize(element)
    @hash = element
  end

  def name
    @hash["Hotel_name"]
  end

  def rate
    @hash["rate"].to_i
  end

  def tax
    @hash["tax"].to_f
  end

  def season_details
    @hash["seasonal_rates"]
  end

  def season_details?
    @hash["seasonal_rates"] != nil
  end

end