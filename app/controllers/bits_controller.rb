class BitsController < ApplicationController
  def index
    render json: Bit.all.map { |e| e[:name] }
  end
end
