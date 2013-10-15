require_relative '../lib/product.rb'
require_relative '../lib/invoice.rb'
#Creating an instance of Invoice i.e. a new biller
biller = Invoice.new
begin
  puts "Name of the product:"
  name = gets.chomp
  puts "Imported?:"
  import_status = gets.chomp
  puts "Exempted from sales tax?"
  exemption = gets.chomp
  puts "Price:"
  price = gets.chomp.to_f
  puts "Do you want to add more items to your list(y/n):"
  answer = gets.chomp
  #Adding product into the biller
  biller.add_product(Product.new(name, import_status, exemption, price))  
  break if answer =~ /^n$/i
end while 1
#Generating and displaying bill
biller.show
