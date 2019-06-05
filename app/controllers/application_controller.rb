class ApplicationController < ActionController::Base
  if Rails.env["production"]
    http_basic_authenticate_with name: "team", password: "sports"
  end
end
