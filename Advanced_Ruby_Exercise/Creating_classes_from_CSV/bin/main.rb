require_relative '../lib/classCreator.rb'
require_relative '../lib/csvParser.rb'
#creating an instance of the class CSVParser by giving the path to the csv file as argument 
csv_object = CSVParser.new('../lib/places.csv')
#creating a dynamic class from the module ClassCreator
klass = ClassCreator.new
#Creating values in the header of the csv as instance methods on the class
klass.create_methods(csv_object.headers)
#array of objects associated with each row in CSV
persons = []
csv_object.rows.each do |row|
  persons << klass.new(row)
end
#Naming the class according to the csv filename
class_name = csv_object.file_name.capitalize
Object.const_set(class_name, klass)