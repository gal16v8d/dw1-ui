import { useGetAll } from 'api/service/hooks/useGenericService';
import MeritPointService from 'api/service/MeritPointService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useTranslation } from 'react-i18next';

const MenuListing = (): JSX.Element => {
  const { t } = useTranslation();
  const { data } = useGetAll(
    VALUES.API_OBJECT.MERIT_POINT.QUERY_KEY,
    MeritPointService,
    1
  );

  const columns = [
    {
      columnKey: 'item.name',
      field: 'item.name',
      header: t('meritPointListing.l_item'),
      sortable: true,
    },
    {
      columnKey: 'point',
      field: 'point',
      header: t('meritPointListing.l_point'),
      sortable: true,
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default MenuListing;
