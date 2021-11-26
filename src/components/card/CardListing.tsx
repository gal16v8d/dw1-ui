import Card from '../../api/model/Card';
import CardService from '../../api/service/CardService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';
import Dw1YesOrNo from '../ui/Dw1YesOrNo';

const CardListing = (): JSX.Element => {
  const { data } = useGetAll(VALUES.API_OBJECT.CARD.QUERY_KEY, CardService);

  const mapExchangeable = (rowData: Card) => {
    return <Dw1YesOrNo value={rowData?.exchangeable} />;
  };

  const columns = [
    { columnKey: 'number', field: 'number', header: 'Number', sortable: true },
    { columnKey: 'name', field: 'name', header: 'Name', sortable: true },
    { columnKey: 'point', field: 'point', header: 'Point', sortable: true },
    {
      columnKey: 'price',
      field: 'price',
      header: 'Price (Bits)',
      sortable: true,
    },
    {
      columnKey: 'exchangeable',
      body: mapExchangeable,
      header: 'Exchangeable',
      sortable: false,
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default CardListing;
