import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { digimonColumns } from './DigimonColumns';

const DigimonListing = (): JSX.Element => {
  const { t } = useListingContext();
  const digimonService = new GenericService(VALUES.API_OBJECT.DIGIMON.ROUTE);

  const { data } = useGetAll(
    VALUES.API_OBJECT.DIGIMON.QUERY_KEY,
    digimonService,
    true
  );

  return <Dw1Listing apiData={data} columns={digimonColumns(t)} />;
};

export default DigimonListing;
