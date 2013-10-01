require_relative '../lib/name.rb'
person1 = Name.new
begin
  person1.get_names
rescue UppercaseErr => detail
  p detail
rescue NullStringErr => detail
  p detail
end