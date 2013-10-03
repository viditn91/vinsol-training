module Sales_Tax

  def self.cal_sales_tax(product)
    sales_tax = 0.to_f
    sales_tax += 0.1 * product.price    
    if product.is_exempted? 
      sales_tax = 0
    elsif product.is_imported?
      sales_tax += 0.05 * product.price
    end
    sales_tax.round(2)    
  end
end
