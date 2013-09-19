class Fibonacci
  def initialize
  	@results = Array.new
  end
  def fibonacci_upto(limit)
    0.upto(limit - 1) do |n|
      @results[n] = n > 1? (@results[n - 2] + @results[n - 1]) : n 		
    end
  end
  def show_results
    @results
  end
end