import VALUES from '../../constants/Dw1Constants';
import GenericService from './GenericService';

class ElementService extends GenericService {}
export default new ElementService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.ELEMENT.ROUTE}`
);
