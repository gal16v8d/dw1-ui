import { useTranslation } from 'react-i18next';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import MenuService from '../../api/service/MenuService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const MenuListing = (): JSX.Element => {
  const { t } = useTranslation();
  const { data } = useGetAll(VALUES.API_OBJECT.MENU.QUERY_KEY, MenuService);

  const columns = [
    {
      columnKey: 'name',
      field: 'name',
      header: t('menuListing.l_name'),
      sortable: true,
    },
    {
      columnKey: 'type',
      field: 'type',
      header: t('menuListing.l_type'),
      sortable: true,
    },
    {
      columnKey: 'description',
      field: 'description',
      header: t('menuListing.l_description'),
      sortable: true,
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default MenuListing;
