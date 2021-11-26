import { useGetAll } from '../../api/service/hooks/useGenericService';
import MedalService from '../../api/service/MedalService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const MedalListing = (): JSX.Element => {
  const { data } = useGetAll(VALUES.API_OBJECT.MEDAL.QUERY_KEY, MedalService);

  const columns = [
    { columnKey: 'number', field: 'number', header: 'Number', sortable: true },
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
      imageColumn={VALUES.API_OBJECT.MACHINE.IMAGE}
    />
  );
};

export default MedalListing;
