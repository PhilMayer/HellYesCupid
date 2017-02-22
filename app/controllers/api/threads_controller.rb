class Api::ThreadsController < ApplicationController
  def index
    @threads = Conversation.where(:lover_one_id => current_user.id).or(Conversation.where(:lover_two_id => current_user.id))
  end

  def create
    @thread = Conversation.new(thread_params)

    if @thread.save
      render 'api/threads/show'
    else
      render text: "Hahahaha no."
    end
  end

  def show
    @thread = Conversation.find(params[:id])

    # @lover = current_user.id === thread_params[:lover_one_id] ?
    # User.find_by_id(thread_params[:lover_two_id]) : User.find_by_id(thread_params[:lover_one_id])
  end

  private
  def thread_params
    params.require(:thread).permit(:lover_one_id, :lover_two_id)
  end
end
