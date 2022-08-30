import VALUES from 'constants/Dw1Constants';
import GenericService from './GenericService';

class GymMachineService extends GenericService {}
export default new GymMachineService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.GYM_MACHINE.ROUTE}`
);
