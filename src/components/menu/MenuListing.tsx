import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { menuColumns } from './MenuColumns';

const MenuListing = (): JSX.Element => {
  const { t } = useListingContext();
  const menuService = new GenericService(VALUES.API_OBJECT.MENU.ROUTE);
  const { data } = useGetAll(VALUES.API_OBJECT.MENU.QUERY_KEY, menuService);

  return <Dw1Listing apiData={data} columns={menuColumns(t)} />;
};

export default MenuListing;
