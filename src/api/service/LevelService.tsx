import VALUES from 'constants/Dw1Constants';
import GenericService from './GenericService';

class LevelService extends GenericService {}
export default new LevelService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.LEVEL.ROUTE}`
);
