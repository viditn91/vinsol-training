require_relative '../lib/code.rb'
code = Code.new
begin
  input = ""
  puts "\nEnter a blank line to evaluate. Enter 'q' to quit."
  loop do
    case gets
    when /^q$/i
      exit
    when "\n"
      break
    else
      input += $_
    end
  end
  puts "Output :\n"
  puts code.execute(input)
end while 1
