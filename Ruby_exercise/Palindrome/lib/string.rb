class String
  def initialize(input_string)
    @input_string = input_string
  end
  def palindrome?
    @input_string == @input_string.reverse
  end
end