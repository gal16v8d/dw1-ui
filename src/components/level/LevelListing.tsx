import { useGetAll } from '../../api/service/hooks/useGenericService';
import LevelService from '../../api/service/LevelService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const LevelListing = (): JSX.Element => {
  const { data } = useGetAll(VALUES.API_OBJECT.LEVEL.QUERY_KEY, LevelService);
  const columns = [{ field: 'name', header: 'Name' }];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default LevelListing;
