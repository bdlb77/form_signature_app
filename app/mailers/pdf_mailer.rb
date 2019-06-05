class PdfMailer < ApplicationMailer
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.pdf_mailer.send_pdf.subject
  #
  def send_pdf
    @first_name = params[:first_name]
    @last_name = params[:last_name]
    @pdf = params[:pdf]
    attachments["#{@first_name}-#{@last_name}.pdf"] = File.read(@pdf.tempfile)
    mail to: "bdlb@utexas.edu", subject: "Bryan Leighton's Signature"
  end
end
