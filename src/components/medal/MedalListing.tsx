import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { medalColumns } from './MedalColumns';

const MedalListing = (): JSX.Element => {
  const { t } = useListingContext();
  const medalService = new GenericService(VALUES.API_OBJECT.MEDAL.ROUTE);
  const { data } = useGetAll(VALUES.API_OBJECT.MEDAL.QUERY_KEY, medalService);

  return (
    <Dw1Listing
      apiData={data}
      columns={medalColumns(t)}
      imageColumn={VALUES.API_OBJECT.MACHINE.IMAGE}
    />
  );
};

export default MedalListing;
