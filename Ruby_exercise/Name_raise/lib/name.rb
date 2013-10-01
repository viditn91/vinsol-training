class NullStringErr < RuntimeError
end

class UppercaseErr < RuntimeError
end

class Name
  attr_accessor :firstname, :lastname

  def get_names
    puts "enter first name_"
    firstname = gets.chomp
    if firstname.empty?
      raise NullStringErr.new, "firstname cannot be null"
    elsif firstname[0] =~ /[a-z]/
      raise UppercaseErr.new, "firstname should have the first letter capital"
    end
    puts "enter last name_"
    lastname = gets.chomp
    if lastname.empty?
      raise NullStringErr.new, "lastname cannot be null"
    end
  end
end