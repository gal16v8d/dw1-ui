import { useGetAll } from '../../api/service/hooks/useGenericService';
import MeritPointService from '../../api/service/MeritPointService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const MenuListing = (): JSX.Element => {
  const { data } = useGetAll(
    VALUES.API_OBJECT.MERIT_POINT.QUERY_KEY,
    MeritPointService,
    1
  );

  const columns = [
    {
      columnKey: 'item.name',
      field: 'item.name',
      header: 'Item',
      sortable: true,
    },
    { columnKey: 'point', field: 'point', header: 'Point', sortable: true },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default MenuListing;
