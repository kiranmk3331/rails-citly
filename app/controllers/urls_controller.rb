class UrlsController < ApplicationController
  def index
    @urls = Url.all
    render status: :ok, json: { urls: @urls }
  end

  def create
    @url = Url.new(url_params)
    @url.short_url = generate_short_url()
    @url.long_url = sanitize()
    if @url.save
      render status: :ok, json: {
        notice: t("successfully_created"),
      }
    else
      errors = @url.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def count
    url = Url.find_by(id: params[:id])
    url.increment!(:click)
    render status: :ok, json: { url: url }
  end

  private

  def url_params
    params.require(:url).permit(:long_url)
  end

  def generate_short_url
    shortened_url = "#{request.base_url}#{rand(36 ** 8).to_s(36)}"
    shortened_url
  end

  def sanitize
    @url.long_url.strip!
    sanitize_url = @url.long_url.downcase.gsub(/(https?:\/\/)|(www\.)/, "")
    "http://#{sanitize_url}"
  end
end
