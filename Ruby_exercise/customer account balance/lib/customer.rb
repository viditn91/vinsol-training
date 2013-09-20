class Customer
  @@counter = 0 
  def initialize(name, balance = 1000)
    @name = name
    @balance = balance
    @@counter += 1
    @account_no = @@counter    
  end
  
  def withdrawal(amt)
    @balance = @balance - amt
  end

  def deposit(amt)
    @balance = @balance + amt
  end
end