import { SavedAnswer } from '@wexelcode/types';

export const extractAnswers = (response: SavedAnswer[]) => {
  const answers: Record<string, any> = {};

  response.forEach((answer) => {
    answers[answer.questionId] = answer.response;
  });

  return answers;
};

export const extractLastScreening = (response: SavedAnswer[]) => {
  if (!response.length) {
    return null;
  }

  return response.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )[0];
};
