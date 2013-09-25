class String
  def palindrome?
    self == reverse
  end
  def palindrome_with_downcase?
    downcase.palindrome?
  end
end