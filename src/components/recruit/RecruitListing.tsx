import Recruit from '../../api/model/mongo/Recruit';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import RecruitService from '../../api/service/RecruitService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';
import Dw1MapLocations from '../ui/Dw1MapLocations';

const RecruitListing = (): JSX.Element => {
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
      header: 'Digimon',
      sortable: true,
    },
    {
      columnKey: 'job',
      field: 'job',
      header: 'Job',
      sortable: true,
    },
    {
      columnKey: 'note',
      field: 'note',
      header: 'Note',
      sortable: true,
    },
    {
      columnKey: 'locations',
      body: mapLocations,
      header: 'Locations',
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default RecruitListing;
