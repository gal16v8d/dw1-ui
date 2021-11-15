import VALUES from '../../constants/Dw1Constants';
import GenericService from './GenericService';

class MedalService extends GenericService {}
export default new MedalService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.MEDAL.ROUTE}`
);
