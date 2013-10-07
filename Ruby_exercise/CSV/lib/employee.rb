class Employee
  @@employees_by_designation = Hash.new { |h, k| h[k] = [] }

  def self.add_employee(line)
    name, empId, desig = line.each{ |field| field.strip! }
    self.new(name, empId, desig)
  end

  def self.get_hash
    @@employees_by_designation
  end 

  def initialize(name, empId, desig)
    @name, @empId, @desig = name, empId, desig
    sort_employees
  end

  def sort_employees
    @@employees_by_designation[@desig] << "#{ @name } (EmpId: #{ @empId })"
  end
end