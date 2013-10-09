class String
  def highlight_search(string)
    regexp = /#{ string }/i
    count = 0
    gsub!(regexp) do |m| 
      count += 1
      "(#{ m })" 
    end
  count
  end
end