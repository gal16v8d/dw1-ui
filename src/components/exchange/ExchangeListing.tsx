import ExchangeService from '../../api/service/ExchangeService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const ExchangeListing = (): JSX.Element => {
  const { data } = useGetAll(
    VALUES.API_OBJECT.EXCHANGE.QUERY_KEY,
    ExchangeService
  );
  const columns = [
    { field: 'who', header: 'Trader' },
    { field: 'base', header: 'You Have' },
    { field: 'result', header: 'Will Trade' },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default ExchangeListing;
