import VALUES from 'constants/Dw1Constants';
import { rest } from 'msw';
import cardsJson from './__mocks__/cards.json';

const handlers = [
  rest.get(`*${VALUES.API_OBJECT.CARD}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(cardsJson))
  ),
];

export default handlers;
