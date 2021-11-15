import VALUES from '../../constants/Dw1Constants';
import GenericService from './GenericService';

class ItemService extends GenericService {}
export default new ItemService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.ITEM.ROUTE}`
);
