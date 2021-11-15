import { Badge } from 'primereact/badge';
import { Column } from 'primereact/column';
import Card from '../../api/model/Card';
import CardService from '../../api/service/CardService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const CardListing = (): JSX.Element => {
  const { data: cards } = useGetAll(
    VALUES.API_OBJECT.CARD.QUERY_KEY,
    CardService
  );
  const columns = [
    { field: 'number', header: 'Number' },
    { field: 'name', header: 'Name' },
    { field: 'point', header: 'Point' },
    { field: 'price', header: 'Price (Bits)' },
  ];

  const mapExchangeable = (rowData: Card) => {
    return (
      <Badge
        value={rowData?.exchangeable ? 'yes' : 'no'}
        severity={rowData?.exchangeable ? 'success' : 'error'}
        className="p-mr-2"
      ></Badge>
    );
  };

  return (
    <Dw1Listing
      apiData={cards}
      columns={columns}
      additionalColumn={true}
      additionalColumnBody={
        <Column body={mapExchangeable} header={'Exchangeable'} />
      }
    />
  );
};

export default CardListing;
