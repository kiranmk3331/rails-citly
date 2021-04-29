class Url < ApplicationRecord
  validates :long_url, presence: true, length: { minimum: 30 }

end
