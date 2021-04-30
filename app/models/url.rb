class Url < ApplicationRecord
  validates :long_url, presence: true, uniqueness: true, length: { minimum: 30 }
  validates :short_url,
            presence: true,
            uniqueness: true
  validates :pinned, inclusion: [true, false]
end
