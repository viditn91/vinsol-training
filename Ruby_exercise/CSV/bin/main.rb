require 'csv.rb'
require_relative '../lib/employee.rb'

CSV.foreach("../files/data.csv") do |row|
  Employee.add_employee(row)
end

File.open("../files/output.txt", "w") do |file|
  employees_by_designation = Employee.get_hash
  file.puts "Designers:"
  employees_by_designation['Designer'].each { |a| file.puts a}
  file.puts "\nDevelopers:" 
  employees_by_designation['Developer'].each { |a| file.puts a}
end
puts File.read("../files/output.txt")