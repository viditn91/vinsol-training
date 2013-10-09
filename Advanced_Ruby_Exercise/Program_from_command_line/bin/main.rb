puts "enter function name_"
name = gets.chomp
puts "enter a single line of code_"
code = gets.chomp

puts eval %{
  def #{ name }
    #{ code }    
  end
  #{ name }
}