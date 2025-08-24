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
  GET_UNAVAILABILITY_TIMES: {
    path: 'physios/:id/get-available-times',
    method: 'GET',
  },
};

export default API;
