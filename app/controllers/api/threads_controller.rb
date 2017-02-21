class Api::ThreadsController < ApplicationController
  def index
    # @threads = Conversation.where(:lover_one_id => current_user.id)
    #   .or(:lover_two_id => current_user.id)
    @threads = Conversation.all
  end

  def show
    @thread = Conversation.find(params[:id])
  end

  private
  def thread_params
    params.require(:thread).permit(:lover_one_id, :lover_two_id)
  end
end
