import Recruit from 'api/model/mongo/Recruit';
import { useGetAll } from 'api/service/hooks/useGenericService';
import RecruitService from 'api/service/RecruitService';
import Dw1Listing from 'components/ui/Dw1Listing';
import Dw1MapLocations from 'components/ui/Dw1MapLocations';
import VALUES from 'constants/Dw1Constants';
import { useTranslation } from 'react-i18next';

const RecruitListing = (): JSX.Element => {
  const { t } = useTranslation();
  const { data } = useGetAll(
    VALUES.API_OBJECT.RECRUIT.QUERY_KEY,
    RecruitService,
    1
  );

  const mapLocations = (rowData: Recruit) => {
    return (
      <Dw1MapLocations
        locations={rowData?.location}
        additionalClassName={'good-chip'}
      />
    );
  };

  const columns = [
    {
      columnKey: 'digimon.name',
      field: 'digimon.name',
      header: t('recruitListing.l_digimon'),
      sortable: true,
    },
    {
      columnKey: 'job',
      field: 'job',
      header: t('recruitListing.l_job'),
      sortable: true,
    },
    {
      columnKey: 'note',
      field: 'note',
      header: t('recruitListing.l_note'),
      sortable: true,
    },
    {
      columnKey: 'locations',
      body: mapLocations,
      header: t('recruitListing.l_locations'),
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default RecruitListing;
