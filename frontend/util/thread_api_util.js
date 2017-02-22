export const fetchThreads = () => {
  return $.ajax({
    method: "GET",
    url: "api/threads"
  });
};

export const fetchThread = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/threads/${id}`
  });
};

export const createThread = (thread) => {
  return $.ajax({
    method: "POST",
    url: "api/threads",
    data: {thread}
  });
};

export const createMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: "api/messages",
    data: {message}
  });
};
