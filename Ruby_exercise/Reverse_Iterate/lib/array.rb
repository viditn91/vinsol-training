class Array 
  def reverse_iterate
    for i in 1..size
      yield(self[-i])
    end
  end
end