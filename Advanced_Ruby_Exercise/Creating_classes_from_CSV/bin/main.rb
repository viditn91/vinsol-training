require 'csv.rb'
#extracting name of the csv file
path_to_csv = '../lib/places.csv'
class_name = File.basename(path_to_csv ,'.csv').capitalize
#class definition
klass = Class.new do
  @@objects = []
  @@fields = []  
  def self.create_methods(fields)
    @@fields = fields
    fields.each do |field|
      ivar = "@#{ field }"
      define_method(field) do
        instance_variable_get(ivar)
      end
    end
  end
  def self.objects
    @@objects
  end
  def initialize(fields)
    @@fields.each_with_index do |field, index|
      eval "@#{ field } = fields[index]"
    end
    @@objects << self
  end
end
#Naming the class according to the csv filename
Object.const_set(class_name, klass)
#Reading the csv and performing functions
count = 0
CSV.foreach(path_to_csv) do |row|
  row.each{ |cell| cell.strip! }
  klass.create_methods(row) if count == 0
  klass.new(row) if count != 0
  count += 1
end
#displays the methods associated with the class, which are fields in the first row of the csv file
p klass.instance_methods false
#getter method 'name' accessed on an element of object array
p klass.objects[1].name
#displays name of the class
p klass.name