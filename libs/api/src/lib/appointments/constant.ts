const API = {
  CREATE_APPOINTMENT: {
    path: 'user/:userId/appointments',
    method: 'POST',
  },
  GET_APPOINTMENT_BY_ID: {
    path: 'user/:userId/appointments/:appointmentId',
    method: 'GET',
  },
};

export default API;
