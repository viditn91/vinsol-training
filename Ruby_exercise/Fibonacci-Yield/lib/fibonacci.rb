class Fibonacci
  def initialize
    @results = Array.new
  end
  def fibonacci_upto(limit)
    0.upto(limit - 1) do |n|
      yield(@results, n)
    end
  end
  def show_results
    @results
  end
end