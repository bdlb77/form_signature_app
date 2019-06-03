class FormDataController < ApplicationController
  def index
    @form_datum = FormDatum.new
  end
end
