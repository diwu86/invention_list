class OtherMaterialsController < ApplicationController
  def index
    render json: OtherMaterial.all.map { |e| e[:name] }
  end
end
