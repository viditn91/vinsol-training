require_relative '../lib/fibonacci.rb'

new_series = Fibonacci.new
new_series.fibonacci_upto(1000)
p new_series.show_results