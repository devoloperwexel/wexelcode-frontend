const API = {
  GET_ALL_QUESTIONNAIRES: {
    path: '/questionnaires',
    method: 'GET',
  },
  GET_QUESTIONS_BY_QUESTIONNAIRE_ID: {
    path: 'questionnaires/550e8400-e29b-41d4-a716-446655440001/questions?page=1&limit=20',
    method: 'GET',
  },
};

export default API;
