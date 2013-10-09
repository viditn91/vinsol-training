class ShoppingList
  def initialize
    @list = []
  end
  def add(item_name, quantity)
    @list << [item_name, quantity]
  end
  def items(&block)
    instance_eval(&block)
  end
  def list
    @list
  end
end