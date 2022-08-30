import { useGetAll } from 'api/service/hooks/useGenericService';
import MedalService from 'api/service/MedalService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useTranslation } from 'react-i18next';

const MedalListing = (): JSX.Element => {
  const { t } = useTranslation();
  const { data } = useGetAll(VALUES.API_OBJECT.MEDAL.QUERY_KEY, MedalService);

  const columns = [
    {
      columnKey: 'number',
      field: 'number',
      header: t('medalListing.l_number'),
      sortable: true,
    },
    {
      columnKey: 'name',
      field: 'name',
      header: t('medalListing.l_name'),
      sortable: true,
    },
    {
      columnKey: 'description',
      field: 'description',
      header: t('medalListing.l_description'),
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
