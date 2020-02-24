module Api::V1
class EventsController < ApplicationController
  before_action :find_event, only: [:show, :update, :destroy]

  def index
    @events = Event.all
    render json: @events
  end

  # READ
  def show
    render json: @event
  end

  # CREATE
  def create
    @event = Event.new(event_params)
    if @event.save
      render json: @event
    else
      render json: @event, status: :unprocessable_entity
    end
  end

  # UPDATE
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE
  def destroy
    @event.destroy
    if @event.destroy
      head :no_content
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  private

    def find_event
      @event = Event.find(params[:id])
    end

    def event_params
      params.require(:event).permit(:title, :description, :start_date, :end_date)
    end

end
end
