class Product
  attr_reader :name, :price, :import_status, :exemption
  attr_accessor :sales_tax, :price_incld_tax
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