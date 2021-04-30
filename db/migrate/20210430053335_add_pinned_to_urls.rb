class AddPinnedToUrls < ActiveRecord::Migration[6.1]
  def change
    add_column :urls, :pinned, :boolean, default: false
  end
end
