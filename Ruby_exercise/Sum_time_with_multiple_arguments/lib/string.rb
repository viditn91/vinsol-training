class String
  def initialize(*strings)
    @strings = strings
    @md = match
  end

  def sum_time
    if @md.include?(nil)
      "enter correct time_"
    else
      secs = 0
      mins = 0
      hours = 0
      0.upto(@md.size - 1) do |i|
        secs  += @md[i][:sec].to_i
        mins  += @md[i][:min].to_i
        hours += @md[i][:hour].to_i
      end
      mins += secs / 60
      hours += mins / 60
      days = hours / 24
      display_time(secs, mins, hours, days)
    end  
  end

  def match
    pattern = %r{
      (?<hour> [0-1]\d | [2][0-3] | ^\d(?=:)){0}
      (?<min>  [0-5]\d | (?<=:)\d){0}  
      (?<sec>  [0-5]\d | (?<=:)\d){0}
      \g<hour>:\g<min>:\g<sec>
    }x
    return @strings.collect { |string| pattern.match(string) }
  end

  def display_time(secs, mins, hours, days)
    if days > 0
      "#{ days } Days & #{ (hours % 24).to_s.rjust(2,'0') }:#{ (mins % 60).to_s.rjust(2,'0') }:#{ (secs % 60).to_s.rjust(2,'0') }"
    else
      "#{ (hours % 24).to_s.rjust(2,'0') }:#{ (mins % 60).to_s.rjust(2,'0') }:#{ (secs % 60).to_s.rjust(2,'0') }"
    end
  end
end