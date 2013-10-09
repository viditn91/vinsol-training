require_relative '../lib/shoppingList.rb'
sl = ShoppingList.new
sl.items do
  add("Toothpaste",2)
  add("Computer",1)
end
p sl.list