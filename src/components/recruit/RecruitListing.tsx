import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { recruitColumns } from './RecruitColumns';

const RecruitListing = (): JSX.Element => {
  const { t } = useListingContext();
  const recruitService = new GenericService(VALUES.API_OBJECT.RECRUIT.ROUTE);
  const { data } = useGetAll(
    VALUES.API_OBJECT.RECRUIT.QUERY_KEY,
    recruitService,
    true
  );

  return <Dw1Listing apiData={data} columns={recruitColumns(t)} />;
};

export default RecruitListing;
