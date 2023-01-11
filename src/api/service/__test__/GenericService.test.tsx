import { API_BASE_CONFIG } from 'config/ApiBaseConfig';
import VALUES from 'constants/Dw1Constants';
import { errorHandlerGetCall } from 'mocks/errors/errorHandler';
import GenericService from '../GenericService';

describe('http service test', () => {
  const cardConfig = API_BASE_CONFIG.find(
    (v) => v.name === VALUES.API_OBJECT.CARD
  );
  const service = new GenericService(cardConfig?.route ?? '');

  it('fetch success', async () => {
    const result = await service.getAll();
    expect(result).toHaveLength(5);
  });

  it('fetch error', async () => {
    errorHandlerGetCall(cardConfig?.route ?? '');
    await expect(service.getAll()).rejects.toThrowError(
      'Request failed with status code 500'
    );
  });
});
