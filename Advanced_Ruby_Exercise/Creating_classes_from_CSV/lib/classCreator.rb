require_relative 'nomenclature.rb'

module ClassCreator
  
  def self.new
    #dynamic class definition
    Class.new do
      @@headers = []
      def self.create_methods(headers)
        @@headers = Nomenclature.modify_headers_name(headers)
        @@headers.each do |field|
          ivar = "@#{ field }"
          define_method(field) do
            instance_variable_get(ivar)
          end
        end
      end
      def initialize(fields)
        headers.each_with_index do |field, index|
          eval "@#{ field } = fields[index]"
        end
        self
      end
      def headers
        @@headers
      end
    end
  end
end