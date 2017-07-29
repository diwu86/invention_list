require 'pry'
class InventionsController < ApplicationController
  def index
    render json: Invention.order(created_at: :desc).all
  end

  def create
    other_materials = params[:other_materials].map{ |k,v| v }.map{ |e| e[:text] }
    invention = Invention.new(title: params[:title], description: params[:description], user_name: params[:user_name],
                                 email: params[:email])
    oms = []
    other_materials.each do |om|
      other_material = OtherMaterial.find_or_create_by(name: om)
      oms << other_material
    end
    invention.other_materials = oms
    invention.save
    render json: invention
  end

  def show
    @invention = Invention.find(params[:id])
    @bits = @invention.bits.map {|b| b[:name] }.join(", ")
    @other_materials = @invention.other_materials.map { |om| om[:name] }.join(", ")
  end
end
