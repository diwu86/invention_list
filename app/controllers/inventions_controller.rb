class InventionsController < ApplicationController
  def index
    render json: Invention.order(created_at: :desc).all
  end

  def Create
    invention = Invention.create(title: params[:title], description: params[:description], user_name: params[:user_name],
                                 email: params[:email], bits: params[:bits], other_materials: params[:other_materials])
    render json: invention
  end
end
