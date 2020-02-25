require 'rails_helper'
require 'pry-byebug'
require "json"

RSpec.describe Api::V1::EventsController do
  let!(:events) { create_list(:event, 2) }
  let(:event_id) { events.first.id }

  # PARSING DATA
  def json
    JSON.parse(response.body)
  end

  # TESTING INDEX
  describe "GET #index" do
    before { get :index }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns right number of contacts' do
      expect(json).not_to be_empty
      expect(json.size).to eq(2)
    end
  end

  # TESTING SHOW
  describe "GET #show" do
    before do
      get :show, params: { id: events.first.id }
      assert_routing api_v1_event_path(events.first.id), controller: 'api/v1/events', action: 'show', format: :json, id: events.first.id.to_s
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns the contact' do
      expect(json).not_to be_empty
      expect(json['id']).to eq(event_id)
    end
  end

  # TESTING CREATE
  describe 'POST #create' do
    context 'when the request is valid' do
      before do
        post :create, params: { event: { title: 'MWC', description: "MWC is the largest mobile event in the world, bringing together the latest innovations and leading-edge technology alongside today's most influential visionaries.", start_date: 24/02/2020, end_date: 27/02/2020 }}
      end

      it 'should creates a event' do
        expect(json.with_indifferent_access[:title]).to eq('MWC')
        expect(json.with_indifferent_access[:describe]).to eq("MWC is the largest mobile event in the world, bringing together the latest innovations and leading-edge technology alongside today's most influential visionaries.")
        expect(json.with_indifferent_access[:start_date]).to eq(24/02/2020)
        expect(json.with_indifferent_access[:end_date]).to eq(27/02/2020)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is invalid' do
      before { post :create, params: { event:{ title: 'New Event' } } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  # TESTING UPDATE
  describe 'PATCH #update' do
      before { put :update, params: { id: events.first.id, event: { title: 'MWC' } } }

      it 'updates the record' do
        expect(json.with_indifferent_access[:title]).to eq('New Event')
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
  end

  # TESTING DELETE
  describe 'DELETE #destroy' do
    before { delete :destroy, params: { id: events.first.id } }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
