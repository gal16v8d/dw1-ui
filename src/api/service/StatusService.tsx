import VALUES from 'constants/Dw1Constants';
import GenericService from './GenericService';

class StatusService extends GenericService {}
export default new StatusService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.STATUS.ROUTE}`
);
