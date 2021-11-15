import Item from '../../api/model/Item';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import ItemService from '../../api/service/ItemService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const ItemListing = (): JSX.Element => {
  const { data } = useGetAll(VALUES.API_OBJECT.ITEM.QUERY_KEY, ItemService);
  const columns = [
    { field: 'name', header: 'Name' },
    { field: 'note', header: 'Note' },
  ];

  const mapEffectProp = (rowData: Item) => {
    return null;
  };

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default ItemListing;
