module Nomenclature
  RegexpMap = {
    / /     => '_',
    /&/     => '',
    /^@/    => '',
    /^@@/   => ''
  }
  def self.modify_headers_name(headers)
    headers.each do |field|
      field.downcase!
      RegexpMap.each_pair { |pattern, subs| field.gsub!(pattern, subs) }
    end
    headers
  end
end
