import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { meritPointColumns } from './MeritPointColumns';

const MeritPointListing = (): JSX.Element => {
  const { t } = useListingContext();
  const meritPointService = new GenericService(
    VALUES.API_OBJECT.MERIT_POINT.ROUTE
  );
  const { data } = useGetAll(
    VALUES.API_OBJECT.MERIT_POINT.QUERY_KEY,
    meritPointService,
    true
  );

  return <Dw1Listing apiData={data} columns={meritPointColumns(t)} />;
};

export default MeritPointListing;
