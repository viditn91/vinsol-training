class Pascal
  def self.generate_pascal(limit)
    0.upto(limit - 1) do |n|
      yield(n)
    end
  end
end