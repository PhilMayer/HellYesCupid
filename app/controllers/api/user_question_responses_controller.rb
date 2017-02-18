class Api::UserQuestionResponsesController < ApplicationController
  def create
    @response = UserQuestionResponse.new(response_params)

    if @response.save
      render json: response_params
    else
      render text: 'error ahhh!!'
    end
  end

  private
  def response_params
    params.require(:user_question_response).permit(:user_id, :answer_id)
  end
end
