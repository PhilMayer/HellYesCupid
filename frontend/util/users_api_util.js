export const fetchUsers = (params) => {
  // let updateParams = params;
  // if(!updateParams) {
  //   updateParams = {};
  // } else {
  //   updateParams = {user: params};
  // }

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
