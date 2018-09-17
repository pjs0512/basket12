class Api::ImagesController < ApplicationController
    skip_before_action :verify_authenticity_token 
    def index
    end
    def create
        @image = Image.new(image_params)
        if @image.save
          redirect_to '/'
        else
          render json: @image.errors, status: :unprocessable_entity
        end
    end
    
    def update
    end
    private
      
  private
    def image_params
      params.fetch(:image, {}).permit(
          :title, :data
      )
    end
end
