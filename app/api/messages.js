import apiClient from './client';

const endpoint = '/messages';

const send = (message, listingId) => {
  return apiClient.post(endpoint, {
    message,
    listingId,
  });
};

export default {
  send,
};
