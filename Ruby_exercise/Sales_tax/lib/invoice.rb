class Invoice
  attr_reader :list_of_products
  SalesTax = 10.0
  ImportDuty = 5.0
  def initialize
    @list_of_products = []
  end
  def add_product(product)
    @list_of_products << product
  end
  def generate_billable_amount
    grand_total = 0
    list_of_products.each do |product|
      taxed_price = cal_taxed_price(product)
      grand_total += taxed_price
    end
    grand_total.round(2)
  end
  def cal_sales_tax(product)
    sales_tax = 0.to_f
    sales_tax += (SalesTax / 100) * product.price    
    if product.is_exempted? 
      sales_tax = 0
    elsif product.is_imported?
      sales_tax += (ImportDuty / 100) * product.price
    end
    sales_tax.round(2)    
  end
  def cal_taxed_price(product)
    product.price + cal_sales_tax(product)
  end
end