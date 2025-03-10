const API = {
  GET_ALL_QUESTIONNAIRES: {
    path: '/questionnaires',
    method: 'GET',
  },
  GET_QUESTIONS_BY_QUESTIONNAIRE_ID: {
    path: '/questionnaires/:id/questions',
    method: 'GET',
  },
};

export default API;
