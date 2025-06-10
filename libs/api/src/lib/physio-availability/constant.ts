const API = {
  SAVE_PHYSIO_UNAVAILABILITIES: {
    path: '/physios/:physioId/answers',
    method: 'POST',
  },
  GET_PHYSIO_UNAVAILABILITIES: {
    path: '/physios/:physioId/unavailabilities',
    method: 'GET',
  },
};

export default API;
