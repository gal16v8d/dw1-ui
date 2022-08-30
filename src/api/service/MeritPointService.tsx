import VALUES from 'constants/Dw1Constants';
import GenericService from './GenericService';

class MeritPointService extends GenericService {}
export default new MeritPointService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.MERIT_POINT.ROUTE}`
);
