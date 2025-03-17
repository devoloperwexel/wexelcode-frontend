const API = {
  GET_BY_ID: {
    path: '/users/:userId/patient',
    method: 'GET',
  },
  UPDATE: {
    path: '/users/:userId/patients/:patientId',
    method: 'PATCH',
  },
};

export default API;
