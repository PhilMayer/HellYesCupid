json.partial! "api/threads/thread", thread: @thread
json.id @thread.id
json.messages @thread.messages, :author_id, :body
