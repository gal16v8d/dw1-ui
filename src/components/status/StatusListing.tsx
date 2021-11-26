import { useGetAll } from '../../api/service/hooks/useGenericService';
import StatusService from '../../api/service/StatusService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const StatusListing = (): JSX.Element => {
  const { data } = useGetAll(VALUES.API_OBJECT.STATUS.QUERY_KEY, StatusService);

  const columns = [
    { columnKey: 'name', field: 'name', header: 'Name', sortable: true },
    {
      columnKey: 'description',
      field: 'description',
      header: 'Description',
      sortable: true,
    },
  ];

  return (
    <Dw1Listing
      apiData={data}
      columns={columns}
      imageColumn={VALUES.API_OBJECT.STATUS.IMAGE}
    />
  );
};

export default StatusListing;
