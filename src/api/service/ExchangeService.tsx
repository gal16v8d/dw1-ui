import VALUES from 'constants/Dw1Constants';
import GenericService from './GenericService';

class ExchangeService extends GenericService {}
export default new ExchangeService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.EXCHANGE.ROUTE}`
);
