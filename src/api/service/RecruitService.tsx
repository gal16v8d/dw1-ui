import VALUES from '../../constants/Dw1Constants';
import GenericService from './GenericService';

class RecruitService extends GenericService {}
export default new RecruitService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.RECRUIT.ROUTE}`
);
