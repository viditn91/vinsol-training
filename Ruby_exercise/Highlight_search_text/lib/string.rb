class String
  def highlight_search
  	p gsub(/(can)/i, '(\1)')
  	occurences = scan(/(can)/i).size
  	"Total occurence found: #{occurences}"
  end
end