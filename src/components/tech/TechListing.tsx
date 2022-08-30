import { useGetAll } from 'api/service/hooks/useGenericService';
import TechService from 'api/service/TechService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useTranslation } from 'react-i18next';

const TechListing = (): JSX.Element => {
  const { t } = useTranslation();
  const { data } = useGetAll(VALUES.API_OBJECT.TECH.QUERY_KEY, TechService, 1);

  const columns = [
    {
      columnKey: 'number',
      field: 'number',
      header: t('techListing.l_number'),
      sortable: true,
    },
    {
      columnKey: 'name',
      field: 'name',
      header: t('techListing.l_name'),
      sortable: true,
    },
    {
      columnKey: 'power',
      field: 'power',
      header: t('techListing.l_power'),
      sortable: true,
    },
    {
      columnKey: 'mp',
      field: 'mp',
      header: t('techListing.l_mp'),
      sortable: true,
    },
    {
      columnKey: 'rang',
      field: 'rang',
      header: t('techListing.l_rang'),
      sortable: true,
    },
    {
      columnKey: 'spec',
      field: 'spec',
      header: t('techListing.l_spec'),
      sortable: true,
    },
    {
      columnKey: 'element.name',
      field: 'element.name',
      header: t('techListing.l_element'),
      sortable: true,
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default TechListing;
