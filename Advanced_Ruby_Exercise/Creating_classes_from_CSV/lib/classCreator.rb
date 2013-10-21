require_relative 'nomenclature.rb'

module ClassCreator
  def self.new
    #dynamic class definition
    Class.new do
      @@headers = []
      def self.create_methods(headers)
        @@headers = Nomenclature.modify_headers_name(headers)
        @@headers.each do |field|
          send(:attr_accessor, field)
        end
      end
      def initialize(fields)
        headers.each_with_index do |field, index|
          send("#{ field }=", fields[index])
        end
        self
      end
      def show_csv_data
        msg = "An instance of class #{ self.class }-> "
        headers.each do |field|
          msg += "#{ field }:#{ send field }  "
        end
        msg
      end
      def headers
        @@headers
      end
    end
  end
end