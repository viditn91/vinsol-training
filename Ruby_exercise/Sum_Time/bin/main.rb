require_relative '../lib/string.rb'
string1 = String.new("11:23:07")
string2 = "23:53:45"
p string1.sum_time(string2)