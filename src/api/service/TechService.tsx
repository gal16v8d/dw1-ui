import VALUES from '../../constants/Dw1Constants';
import GenericService from './GenericService';

class TechService extends GenericService {}
export default new TechService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.TECH.ROUTE}`
);
