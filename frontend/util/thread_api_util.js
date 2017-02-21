export const fetchThreads = () => {
  return $.ajax({
    method: "GET",
    url: "api/threads"
  });
};
