class String
  def replace
    self.gsub(/[aeiou]/i, '*')
  end
end