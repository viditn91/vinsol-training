#an instance of class String
band = "Beatles"
#defining method inside singleton class
class << band
  def genre
    "Pop/Rock"
  end
end
#defining singleton method directly 
def band.label
  "Parlophone"
end
puts band.genre
puts band.label
#Running methods on another instance of class string causes error
puts "Pink Floyd".genre
puts "Pink Floyd".label