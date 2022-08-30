import VALUES from 'constants/Dw1Constants';
import GenericService from './GenericService';

class LocationService extends GenericService {}
export default new LocationService(
  `${VALUES.API.BASE_URL}${VALUES.API_OBJECT.LOCATION.ROUTE}`
);
