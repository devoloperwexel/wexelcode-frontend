const API = {
  CREATE_APPOINTMENT: {
    path: 'user/:userId/appointments',
    method: 'POST',
  },
  GET_APPOINTMENT_BY_ID: {
    path: 'user/:userId/appointments/:appointmentId',
    method: 'GET',
  },
  GET_APPOINTMENTS_BY_USER_ID: {
    path: 'user/:userId/appointments',
    method: 'GET',
  },
};

export default API;
