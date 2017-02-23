class Api::UserQuestionResponsesController < ApplicationController
  def create
    @response = UserQuestionResponse.new(response_params)
    @user = @response.user
    # if @response.personality_question_answer.question_id == params[:question_id]
    #
    # end
    if @response.save

      render 'api/users/show'
    else
      render text: 'error ahhh!!'
    end
  end

  private
  def response_params
    params.require(:user_question_response).permit(:user_id, :answer_id, :weight, acceptable_answers: [])
  end
end
