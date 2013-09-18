def fibonacci
  array = (1..1000).to_a
  results = Array.new
  array.each do |n|
    results[n-1] = n-1 > 1? yield(results[n-3], results[n-2]) : n-1 		
  end
  p results
end
fibonacci { |a, b| a + b }