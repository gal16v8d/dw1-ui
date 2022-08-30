import VALUES from 'constants/Dw1Constants';
import GenericService from './GenericService';

class CardService extends GenericService {}
export default new CardService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.CARD.ROUTE}`
);
