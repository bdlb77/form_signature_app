class PagesController < ApplicationController
  def home
  end

  def send_email
    p "MADE IT HEREEEEEEEEEEE"
    mail = PdfMailer.with(first_name: params[:first_name], last_name: params[:last_name], pdf: params[:pdf]).send_pdf

    mail.deliver_now
    respond_to do |format|
      format.js { render 'pages/home' , status: 204}
    end
  end
end
