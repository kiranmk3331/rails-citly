class UrlsController < ApplicationController
  def index
    @urls = Url.all
  end

  def create
    @url = Url.new(url_params)
    @url.short_url = @url.generate_short_url
    @url.long_url = @url.sanitize
    if @url.save
      render status: :ok, json: {
        notice: t("successfully_created"),
      }
    else
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def show
    @url = Url.find_by(short_url: params[:short_url])
    redirect_to @url.sanitize
  end

  private

  def url_params
    params.require(:url).permit(:long_url)
  end
end
