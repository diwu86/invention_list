require 'pry'
class InventionsController < ApplicationController
  def index
    render json: Invention.order(created_at: :desc).all
  end

  def create
    invention = Invention.create(title: params[:title], description: params[:description], user_name: params[:user_name],
                                 email: params[:email])
    render json: invention
  end

  def show
    @invention = Invention.find_by(params[:id])
    @bits = @invention.bits.map {|b| b[:name] }.join(", ")
    @other_materials = @invention.other_materials.map { |om| om.name }
  end
end
