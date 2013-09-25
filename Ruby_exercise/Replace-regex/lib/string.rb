class String
  def replace_vowel_with_asterisk
    self.gsub(/[aeiou]/i, '*')
  end
end