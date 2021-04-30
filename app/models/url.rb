class Url < ApplicationRecord
  require "csv"

  validates :long_url, presence: true, uniqueness: true, format: URI::regexp(%w[http https]), length: { minimum: 30 }
  validates :short_url,
            presence: true,
            uniqueness: true,
            format: URI::regexp(%w[http https])
  validates :pinned, inclusion: [true, false]
  default_scope { order(pinned: :desc) }

  def self.to_csv
    attributes = %w{long_url short_url click pinned}

    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |url|
        csv << attributes.map { |attr| url.send(attr) }
      end
    end
  end
end
