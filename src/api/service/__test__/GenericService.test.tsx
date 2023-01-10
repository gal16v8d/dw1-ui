import VALUES from 'constants/Dw1Constants';
import GenericService from '../GenericService';
import { errorHandlerGetCall } from 'mocks/errors/errorHandler';

describe('http service test', () => {
  const service = new GenericService(VALUES.API_OBJECT.CARD.ROUTE);

  it('fetch success', async () => {
    const result = await service.getAll();
    expect(result).toHaveLength(5);
  });

  it('fetch error', async () => {
    errorHandlerGetCall(VALUES.API_OBJECT.CARD.ROUTE);
    await expect(service.getAll()).rejects.toThrowError(
      'Request failed with status code 500'
    );
  });
});
