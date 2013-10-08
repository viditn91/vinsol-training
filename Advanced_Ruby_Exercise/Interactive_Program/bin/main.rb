begin
  command1 = gets
  if command1.chomp =~ /^q$/i then break
  else
  	begin
  	  command2 = gets
  	  exit if command2.chomp =~ /^q$/i
  	  command = command1.concat command2
  	end while !command2.chomp.empty?
  	puts eval command1
  end
end while 1