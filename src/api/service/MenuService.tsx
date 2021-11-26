import VALUES from '../../constants/Dw1Constants';
import GenericService from './GenericService';

class MenuService extends GenericService {}
export default new MenuService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.MENU.ROUTE}`
);
