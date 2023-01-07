import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { gymMachineColumns } from './GymMachineColumns';

const GymMachineListing = (): JSX.Element => {
  const { t } = useListingContext();
  const gymMachineService = new GenericService(
    VALUES.API_OBJECT.GYM_MACHINE.ROUTE
  );

  const { data } = useGetAll(
    VALUES.API_OBJECT.GYM_MACHINE.QUERY_KEY,
    gymMachineService,
    true
  );

  return <Dw1Listing apiData={data} columns={gymMachineColumns(t)} />;
};

export default GymMachineListing;
