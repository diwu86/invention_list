require 'pry'
class InventionsController < ApplicationController
  def index
     inventions = []
     Invention.order(created_at: :desc).includes(:bits).includes(:other_materials).all.each do |invention|
        inventions << format_invention(invention)
     end
     render json: inventions
  end

  def create
    invention = Invention.new(invention_params)
    if params[:body][:other_materials].present?
      other_materials = params[:body][:other_materials].map{ |k,v| v }.map{ |e| e[:text] }
      other_materials_related = []
      other_materials.each do |om|
        other_material = OtherMaterial.find_or_create_by(name: om)
        other_materials_related << other_material
      end
      invention.other_materials = other_materials_related
    end

    if params[:body][:bits].present?
      bits = params[:body][:bits].map{ |k,v| v }.map{ |e| e[:text] }
      bits_related = []
      bits.each do |b|
        bit = Bit.find_by(name: b)
        bits_related << bit
      end
      invention.bits = bits_related
    end


    begin
     invention.save!

      render json: format_invention(invention)
    rescue => e
      render json: { :errors => e.message }
    end
  end

  private

  def invention_params
    params.require(:body).permit(:title, :description, :user_name, :email, :image)
  end

  def format_invention(invention)
    {
        id: invention.id,
        title: invention.title,
        description: invention.description,
        user_name: invention.user_name,
        email: invention.email,
        image: invention.image,
        bits: invention.bits.map { |b| b[:name] }.join(", "),
        other_materials: invention.other_materials.map{ |om| om[:name] }.join(", ")
    }
  end
end
