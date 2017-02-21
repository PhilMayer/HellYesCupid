export const fetchUsers = (params) => {
  return $.ajax({
    method: "GET",
    url: "api/users",
    data: {user: params}
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}`
  });
};
