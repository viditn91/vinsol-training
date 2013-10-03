require_relative '../lib/product.rb'
require_relative '../lib/display.rb'

list = Display.new
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
  list.add_product(Product.new(name, import_status, exemption, price))  
  break if answer =~ /^n$/i
end while 1
list.show_list