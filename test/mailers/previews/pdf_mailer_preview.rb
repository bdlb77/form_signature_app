# Preview all emails at http://localhost:3000/rails/mailers/pdf_mailer
class PdfMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/pdf_mailer/send_pdf
  def send_pdf
    PdfMailer.send_pdf
  end

end
