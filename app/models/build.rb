class Build < ApplicationRecord
  belongs_to :app
  validates :app, presence: true
  validates :status, inclusion: { in: BUILD_STATUSES }
  mount_uploader :source_file, SourceFileUploader
end
