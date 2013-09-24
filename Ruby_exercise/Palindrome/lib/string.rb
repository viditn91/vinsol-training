class String
  def palindrome?
    self.downcase == reverse.downcase
  end
end