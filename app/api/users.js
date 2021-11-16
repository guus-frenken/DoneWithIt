import apiCient from './client';

const endpoint = '/users';

const register = userInfo => {
  return apiCient.post(endpoint, userInfo);
};

export default {
  register,
};
