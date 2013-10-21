require 'csv.rb'
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
end