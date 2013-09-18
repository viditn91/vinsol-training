def fibonacci(limit, results)
  0.upto(limit - 1) do |n|
    results[n] = n > 1? yield(results[n - 2], results[n - 1]) : n 		
  end
end

def show_results(results)
  p results
end

fibonacci_upto = 1000
result_array = Array.new 
fibonacci(fibonacci_upto, result_array) { |a, b| a + b }
show_results(result_array)