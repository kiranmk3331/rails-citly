class UrlsController < ApplicationController
  before_action :load_url, only: [:update, :show]

  def index
    @urls = Url.all
    respond_to do |format|
      format.html
      format.json {render status: :ok, json: { urls: @urls }}
      format.csv { send_data @urls.to_csv, filename: "urls-#{Date.today}.csv" }
    end
    
  end

  def create
    @url = Url.new(url_params)
    @url.short_url = generate_short_url()
    if @url.save
      render status: :ok, json: {
        notice: t("successfully_created"),
      }
    else
      errors = @url.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def show
    @url.increment!(:click)
    if @url.save
      render status: :ok, json: { url: @url }
    else
      errors = @url.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def update
    if @url.update_attribute(:pinned, !@url.pinned)
      render status: :ok, json: {
               message: t("successfully_updated"),
             }
    else
      errors = @url.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  private

  def url_params
    params.require(:url).permit(:long_url)
  end

  def load_url
    @url = Url.find(params[:id])
  rescue ActiveRecord::RecordNotFound => errors
    render json: { errors: errors }
  end

  def generate_short_url
    "#{request.base_url}/#{rand(36 ** 8).to_s(36)}"
  end
end
