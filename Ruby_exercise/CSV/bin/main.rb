require_relative '../lib/employee.rb'

File.readlines("../files/data.txt").each do |line|
  Employee.add_employee(line)
end

File.open("../files/output.txt", "w") do |file|
  hash = Employee.get_hash
  file.puts "Designers:"
  hash['Designer'].each { |a| file.puts a}
  file.puts "\nDevelopers:" 
  hash['Developer'].each { |a| file.puts a}
end
puts File.read("../files/output.txt")