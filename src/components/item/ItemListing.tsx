import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { itemColumns } from './ItemColumns';

const ItemListing = (): JSX.Element => {
  const { t } = useListingContext();
  const itemService = new GenericService(VALUES.API_OBJECT.ITEM.ROUTE);
  const { data } = useGetAll(
    VALUES.API_OBJECT.ITEM.QUERY_KEY,
    itemService,
    true
  );

  return (
    <Dw1Listing
      apiData={data}
      columns={itemColumns(t)}
      imageColumn={VALUES.API_OBJECT.ITEM.IMAGE}
    />
  );
};

export default ItemListing;
