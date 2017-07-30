class ImagesController < ApplicationController
  #TODO: have to turn CSRF off here?
  skip_before_action :verify_authenticity_token
  def upload_image
    uploader = ImageUploader.new
    uploader.store!(params[:file])

    render json: {
        thumb_url: uploader.thumb.url,
        url: uploader.url
    }
  end
end
