import VALUES from 'constants/Dw1Constants';
import GenericService from './GenericService';

class MachineService extends GenericService {}
export default new MachineService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.MACHINE.ROUTE}`
);
