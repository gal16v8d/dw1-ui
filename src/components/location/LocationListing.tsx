import { useGetAll } from '../../api/service/hooks/useGenericService';
import LocationService from '../../api/service/LocationService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const LocationListing = (): JSX.Element => {
  const { data: locations } = useGetAll(
    VALUES.API_OBJECT.LOCATION.QUERY_KEY,
    LocationService
  );
  const columns = [
    { columnKey: 'name', field: 'name', header: 'Name', sortable: true },
  ];

  return <Dw1Listing apiData={locations} columns={columns} />;
};

export default LocationListing;
