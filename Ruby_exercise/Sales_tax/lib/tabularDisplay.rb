class TabularDisplay
  def initialize(headers, rows, footers)
    @headers = headers
    @rows = rows
    @footers = footers
  end
  def generate_bill
    grand_total = 0
    spacing = 15
    columns = "\n"
    @headers.each do |field|
      columns += "#{field.center(spacing,' ')}"
    end
    puts columns
    puts ''.center(columns.size, '-')
    rows = "\n"
    @rows.each do |row|
      row.each do |cell|
        rows += "#{cell.to_s.center(spacing,' ')}"
      end
      rows += "\n"
    end
    puts rows   
    puts ''.center(columns.size, '-')
    footers = "\n"
    @footers.each do |value|
      footers += "#{value.to_s} "
    end 
    puts footers.center(columns.size, '-')
  end
end