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

export const createMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: "api/messages",
    data: {message}
  });
};
