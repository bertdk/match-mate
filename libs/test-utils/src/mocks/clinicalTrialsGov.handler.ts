import { rest } from 'msw';

import { clinicalTrialResponse } from './information/clinicalTrialsGovInfo';

const BASE_URL = 'https://clinicaltrials.gov';

export const clinicalTrialsGovHandlers = [
  rest.get(`${BASE_URL}/api/v2/studies`, (request, response, context) => {
    return response(context.body(JSON.stringify(clinicalTrialResponse)));
  }),
];
