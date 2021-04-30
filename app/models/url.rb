class Url < ApplicationRecord
  validates :long_url, presence: true, uniqueness: true, format: URI::regexp(%w[http https]), length: { minimum: 30 }
  validates :short_url,
            presence: true,
            uniqueness: true,
            format: URI::regexp(%w[http https])
  validates :pinned, inclusion: [true, false]
  default_scope { order(pinned: :desc) }
end
