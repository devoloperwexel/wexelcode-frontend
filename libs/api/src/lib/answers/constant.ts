const API = {
  SAVE_ANSWER: {
    path: '/users/:userId/answers',
    method: 'POST',
  },
  GET_ANSWERS: {
    path: '/users/:userId/answers',
    method: 'GET',
  },
  GET_ANSWER_SUMMARY: {
    path: '/users/:userId/answers/summary',
    method: 'GET',
  },
};

export default API;
