require_relative '../lib/csvParser.rb'
#creating an instance of the class CSVParser by giving the path to the csv file as argument
path = File.dirname(__FILE__) + "/../lib/persons.csv"
parser = CSVParser.new(path)
dynamic_class_objects = parser.to_class_objects
dynamic_class_objects.each { |instance| puts instance.show_csv_data }