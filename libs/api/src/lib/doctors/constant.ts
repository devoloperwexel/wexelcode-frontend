const API = {
  GET_ALL: {
    path: '/physios',
    method: 'GET',
  },
  GET_BY_ID: {
    path: '/physios/:id',
    method: 'GET',
  },
  GET_AVAILABILITY: {
    path: '/physios/:id/availability',
    method: 'GET',
  },
};

export default API;
