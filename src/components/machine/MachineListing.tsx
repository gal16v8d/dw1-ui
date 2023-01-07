import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { machineColumns } from './MachineColumns';

const MachineListing = (): JSX.Element => {
  const { t } = useListingContext();
  const machineService = new GenericService(VALUES.API_OBJECT.MACHINE.ROUTE);
  const { data } = useGetAll(
    VALUES.API_OBJECT.MACHINE.QUERY_KEY,
    machineService,
    true
  );

  return <Dw1Listing apiData={data} columns={machineColumns(t)} />;
};

export default MachineListing;
