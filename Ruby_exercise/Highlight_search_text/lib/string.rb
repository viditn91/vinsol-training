class String
  def highlight_search(string)
    pattern = /#{ string }/i
    occurences = 0
    gsub!(pattern) do |match| 
      occurences += 1
      "(#{ match })" 
    end
  occurences
  end
end