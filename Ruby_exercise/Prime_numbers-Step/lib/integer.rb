require 'prime'
class Integer
  def find_primes
    p 2
    3.step(self, 2) { |n| p n if n.prime? }
  end
end
