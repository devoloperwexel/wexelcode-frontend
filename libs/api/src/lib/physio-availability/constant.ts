const API = {
  SAVE_PHYSIO_UNAVAILABILITIES: {
    path: '/physios/:physioId/unavailabilities',
    method: 'POST',
  },
  DELETE_PHYSIO_UNAVAILABILITIES: {
    path: '/physios/:physioId/unavailabilities/:id',
    method: 'DELETE',
  },
  GET_PHYSIO_UNAVAILABILITIES: {
    path: '/physios/:physioId/unavailabilities',
    method: 'GET',
  },
  CHECK_UNAVAILABILITY: {
    path: 'physios/:id/check-unavailabilities',
    method: 'GET',
  },
};

export default API;
