require_relative '../lib/fibonacci.rb'

new_series = Fibonacci.new
new_series.fibonacci_upto(1000) { |results, n| results[n] = n > 1? (results[n - 2] + results[n - 1]) : n }
p new_series.show_results