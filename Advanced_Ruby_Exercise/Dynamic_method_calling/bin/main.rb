require_relative '../lib/child.rb'

child = Child.new("newstring")
puts "enter a method name_"
name = gets.chomp.to_sym
puts "enter the argument(s)_"
args = gets.chomp.split(',')
p args.empty? ? child.send(name) : child.send(name, args)