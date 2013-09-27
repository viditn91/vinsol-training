class String
  def sum_time(other_string)
    pattern = %r{
      (?<hour> [0-1]\d | [2][0-3] | ^\d(?=:)){0}
      (?<min>  [0-5]\d | (?<=:)\d){0}  
      (?<sec>  [0-5]\d | (?<=:)\d){0}
      \g<hour>:\g<min>:\g<sec>
    }x
    md1 = pattern.match(self)
    md2 = pattern.match(other_string)
    if md1 != nil && md2 != nil
      secs  = md1[:sec].to_i + md2[:sec].to_i
      mins  = md1[:min].to_i + md2[:min].to_i + secs / 60
      hours = md1[:hour].to_i + md2[:hour].to_i + mins / 60
      days  = hours / 24
      if days > 0
        "#{ days } Days & #{ (hours % 24).to_s.rjust(2,'0') }:#{ (mins % 60).to_s.rjust(2,'0') }:#{ (secs % 60).to_s.rjust(2,'0') }"
      else
        "#{ (hours % 24).to_s.rjust(2,'0') }:#{ (mins % 60).to_s.rjust(2,'0') }:#{ (secs % 60).to_s.rjust(2,'0') }"
      end
    else
      "Please enter correct time_"
    end
  end
end