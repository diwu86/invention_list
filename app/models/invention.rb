class Invention < ApplicationRecord
  has_and_belongs_to_many :bits
  has_and_belongs_to_many :other_materials

  validates :title, presence: true
  validates :description, presence: true
  #validates :bits, presence: true
end
