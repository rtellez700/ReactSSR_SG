// will define TYPES within this file since will be a small app
export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  // api is an axios instance from client.js
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
