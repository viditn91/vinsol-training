class String
  def palindrome?
    p self == reverse ? "Its a palindrome" : "Its not a palindrome"
  end
end