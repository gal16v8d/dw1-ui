import ElementService from '../../api/service/ElementService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const ElementListing = (): JSX.Element => {
  const { data } = useGetAll(
    VALUES.API_OBJECT.ELEMENT.QUERY_KEY,
    ElementService
  );
  const columns = [
    { columnKey: 'name', field: 'name', header: 'Name', sortable: true },
  ];

  return (
    <Dw1Listing
      apiData={data}
      columns={columns}
      imageColumn={VALUES.API_OBJECT.ELEMENT.IMAGE}
    />
  );
};

export default ElementListing;
