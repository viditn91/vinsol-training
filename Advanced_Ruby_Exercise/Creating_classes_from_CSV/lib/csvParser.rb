require 'csv.rb'
require_relative 'classCreator.rb'

class CSVParser
  attr_reader :file_name
  
  def initialize(path_to_csv_file)
    @path = path_to_csv_file
    @file_name = File.basename(path_to_csv_file, '.csv')
  end
  def headers
    headers = []
    CSV.foreach(@path) do |columns|
      columns.each{ |column| column.strip! }
      headers = columns
      break
    end
    headers
  end
  def rows
    rows = []
    count = 0
    CSV.foreach(@path) do |row|
      row.each{ |cell| cell.strip! }
      rows << row if count > 0
      count += 1 
    end
    rows
  end
  def to_class_objects
    #creating a dynamic class from the module ClassCreator
    klass = ClassCreator.new
    #Creating values in the header of the csv as instance methods on the class
    klass.create_methods(headers)
    #array of objects associated with each row in CSV
    objects = []
    rows.each do |row|
      objects << klass.new(row)
    end
    #Naming the class according to the csv filename
    Object.const_set(file_name.capitalize, klass)
    objects
  end
end