class Api::QuestionsController < ApplicationController
  def index
    @questions = PersonalityQuestion.all
    render :index
  end
end
