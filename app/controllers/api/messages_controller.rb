class Api::MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    @thread = Conversation.find(message.thread_id)

    if message.save
      render 'api/threads/show'
    else
      render text: "Noooooope"
    end
  end

  private
  def message_params
    params.require(:message).permit(:thread_id, :author_id, :body)
  end
end
