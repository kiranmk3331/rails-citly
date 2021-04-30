class AddUniqueToUrls < ActiveRecord::Migration[6.1]
  def change
    add_index :urls, :long_url, :unique => true
    add_index :urls, :short_url, :unique => true
  end
end
