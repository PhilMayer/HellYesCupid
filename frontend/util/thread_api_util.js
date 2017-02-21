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
