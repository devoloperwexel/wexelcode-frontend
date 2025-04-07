const API = {
  GET_BY_ID: {
    path: '/users/:userId/patient?includes=user',
    method: 'GET',
  },
  CREATE: {
    path: '/users/:userId/patients',
    method: 'POST',
  },
  UPDATE: {
    path: '/users/:userId/patients/:patientId',
    method: 'PATCH',
  },
};

export default API;
