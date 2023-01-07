import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { techColumns } from './TechColumns';

const TechListing = (): JSX.Element => {
  const { t } = useListingContext();
  const techService = new GenericService(VALUES.API_OBJECT.TECH.ROUTE);
  const { data } = useGetAll(
    VALUES.API_OBJECT.TECH.QUERY_KEY,
    techService,
    true
  );

  return <Dw1Listing apiData={data} columns={techColumns(t)} />;
};

export default TechListing;
