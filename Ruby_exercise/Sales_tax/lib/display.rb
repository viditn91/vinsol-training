require_relative '../lib/product.rb'
require_relative '../lib/sales_tax.rb'

class Display

  def initialize
    @products = []
  end

  def add_product(product)
    @products << product
  end

  def to_s
    grand_total = 0
    spacing = 15
    columns = "\n#{'Name'.center(spacing,' ')} #{'Price'.center(spacing,' ')} #{'Imported?'.center(spacing,' ')} #{'Exempted?'.center(spacing,' ')} #{'Sales Tax'.center(spacing,' ')} #{'Taxed Price'.center(spacing,' ')}\n"
    puts columns
    puts ''.center(columns.size, '-') 

    @products.each do |product|
      sales_tax = Sales_Tax.cal_sales_tax(product)
      taxed_price = product.price + sales_tax
      grand_total += taxed_price
      puts "\n#{product.name.center(spacing,' ')} #{product.price.to_s.center(spacing,' ')} #{product.exemption.center(spacing,' ')} #{product.import_status.center(spacing,' ')}#{sales_tax.to_s.center(spacing,' ')} #{taxed_price.to_s.center(spacing,' ')}"
    end

    puts ''.center(columns.size, '-') 
    puts "\nGRAND TOTAL = #{grand_total.round}".center(columns.size, '-')
  end
end