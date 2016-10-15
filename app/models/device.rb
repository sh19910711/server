class Device < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :apps

  DEVICE_NAME_REGEX = /\A[a-zA-Z][a-zA-Z0-9\-\_]*\z/
  validates :user, presence: true
  validates :device_secret, presence: true
  validates :name, uniqueness: { scope: :user }, presence: true,
            format: { with: DEVICE_NAME_REGEX }
  validates :status, inclusion: { in: DEVICE_STATUSES }
  validates :board, inclusion: { in: SUPPORTED_BOARDS }
end
