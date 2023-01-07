import { rest } from 'msw';
import { server } from '../server';

const errorHandlerGetCall = (path: string): void => {
  const errorMsg = { message: 'DW1-Api is down' };
  server.use(
    rest.get(`*/${path}`, (req, res, ctx) =>
      res(ctx.status(500), ctx.json(errorMsg))
    )
  );
};

export { errorHandlerGetCall };
