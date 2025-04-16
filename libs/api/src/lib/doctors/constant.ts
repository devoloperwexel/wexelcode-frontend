const API = {
  GET_ALL: {
    path: '/physios',
    method: 'GET',
  },
  GET_BY_USER_ID: {
    path: 'users/:userId/physio?includes=user',
    method: 'GET',
  },
  GET_AVAILABILITY: {
    path: 'physios/:id/availability',
    method: 'GET',
  },
  UPDATE: {
    path: 'users/:userId/physios/:id',
    method: 'PATCH',
  },
};

export default API;
