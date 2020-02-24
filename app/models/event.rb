class Event < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :start, presence: true
  validates :end, presence: true
end
