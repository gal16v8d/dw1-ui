import { useGetAll } from '../../api/service/hooks/useGenericService';
import TechService from '../../api/service/TechService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const TechListing = (): JSX.Element => {
  const { data } = useGetAll(VALUES.API_OBJECT.TECH.QUERY_KEY, TechService, 1);

  const columns = [
    { columnKey: 'number', field: 'number', header: 'Number', sortable: true },
    { columnKey: 'name', field: 'name', header: 'Name', sortable: true },
    { columnKey: 'power', field: 'power', header: 'Power', sortable: true },
    { columnKey: 'mp', field: 'mp', header: 'MP', sortable: true },
    { columnKey: 'rang', field: 'rang', header: 'Rang', sortable: true },
    { columnKey: 'spec', field: 'spec', header: 'Spec', sortable: true },
    {
      columnKey: 'element.name',
      field: 'element.name',
      header: 'Element',
      sortable: true,
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default TechListing;
