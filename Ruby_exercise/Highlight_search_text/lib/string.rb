class String
  def highlight_search(string)
  	regexp = /#{ string }/i
  	gsub!(regexp, '(\0)')
  	scan(regexp).size
  end
end