class Image < ApplicationRecord
  attr_accessor :url, :name, :location, :thumb_url
  mount_uploader :url, ImageUploader


end
