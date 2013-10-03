class Product
  attr_reader :name, :price, :import_status, :exemption
  
  def initialize(name, import_status, exemption, price)
    @name, @import_status, @exemption, @price = name, import_status, exemption, price
  end
  
  def is_imported?
    @import_status =~ /yes/i
  end

  def is_exempted?
    @exemption =~ /yes/i
  end

end