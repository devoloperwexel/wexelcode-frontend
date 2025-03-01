const API = {
  GET_ALL: {
    path: '/physios',
    method: 'GET',
  },
  GET_BY_USER_ID: {
    path: 'users/:userId/physios?includes=user',
    method: 'GET',
  },
  GET_AVAILABILITY: {
    path: '/physios/:id/availability',
    method: 'GET',
  },
};

export default API;
