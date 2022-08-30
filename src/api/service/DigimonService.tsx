import VALUES from 'constants/Dw1Constants';
import GenericService from './GenericService';

class DigimonService extends GenericService {}
export default new DigimonService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.DIGIMON.ROUTE}`
);
