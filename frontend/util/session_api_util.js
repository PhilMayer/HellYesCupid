export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user}
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session/'
  });
};

export const updateUser = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: {user}
  });
};
