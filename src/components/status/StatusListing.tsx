import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { statusColumns } from './StatusColumns';

const StatusListing = (): JSX.Element => {
  const { t } = useListingContext();
  const statusService = new GenericService(VALUES.API_OBJECT.STATUS.ROUTE);
  const { data } = useGetAll(VALUES.API_OBJECT.STATUS.QUERY_KEY, statusService);

  return (
    <Dw1Listing
      apiData={data}
      columns={statusColumns(t)}
      imageColumn={VALUES.API_OBJECT.STATUS.IMAGE}
    />
  );
};

export default StatusListing;
