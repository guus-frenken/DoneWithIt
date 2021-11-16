import apiCient from './client';

const endpoint = '/auth';

const login = (email, password) => {
  return apiCient.post(endpoint, {
    email,
    password,
  });
};

export default {
  login,
};
