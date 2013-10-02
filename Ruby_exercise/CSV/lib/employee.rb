class Employee
  @@hash = Hash.new { |h, k| h[k] = [] }

  def self.add_employee(line)
    name, empId, desig = line.split(',').each{ |field| field.strip! }
    self.new(name, empId, desig)
  end

  def self.get_hash
    return @@hash
  end 

  def initialize(name, empId, desig)
    @name, @empId, @desig = name, empId, desig
    sort_employees
  end

  def sort_employees
    @@hash[@desig] << "#{ @name } (EmpId: #{ @empId })"
  end
end