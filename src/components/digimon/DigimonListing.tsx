import isEmpty from 'lodash/isEmpty';
import { Chip } from 'primereact/chip';
import { DataScroller } from 'primereact/datascroller';
import Digimon from '../../api/model/mongo/Digimon';
import Tech from '../../api/model/mongo/Tech';
import DigimonService from '../../api/service/DigimonService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import { useListingContext } from '../../provider/listing/Dw1ListingProvider';
import Dw1Listing from '../ui/Dw1Listing';
import Dw1MapLocations from '../ui/Dw1MapLocations';
import Dw1YesOrNo from '../ui/Dw1YesOrNo';

const DigimonListing = (): JSX.Element => {
  const { t } = useListingContext();
  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.DIGIMON.QUERY_KEY,
    DigimonService,
    1
  );

  const mapTechs = (rowData: Digimon) => {
    return (
      !isEmpty(rowData?.tech ?? []) && (
        <DataScroller
          value={rowData.tech}
          itemTemplate={(tech: Tech) => (
            <Chip label={tech.name} className={'p-mr-2 p-mb-2 good-chip'} />
          )}
          rows={5}
          buffer={0.5}
        />
      )
    );
  };

  const mapRecruitable = (rowData: Digimon) => {
    return <Dw1YesOrNo value={!!rowData?.recruitable} />;
  };

  const mapRaisable = (rowData: Digimon) => {
    return <Dw1YesOrNo value={!!rowData?.raisable} />;
  };

  const mapLocationHappy = (rowData: Digimon) => {
    return (
      <Dw1MapLocations
        locations={rowData?.locationHappy}
        additionalClassName={'good-chip'}
      />
    );
  };

  const mapLocationSad = (rowData: Digimon) => {
    return (
      <Dw1MapLocations
        locations={rowData?.locationSad}
        additionalClassName={'bad-chip'}
      />
    );
  };

  const columns = [
    {
      columnKey: 'name',
      field: 'name',
      header: t('digimonListing.l_name'),
      sortable: true,
    },
    {
      columnKey: 'level.name',
      field: 'level.name',
      header: t('digimonListing.l_level'),
      sortable: true,
    },
    {
      columnKey: 'type',
      field: 'type',
      header: t('digimonListing.l_type'),
      sortable: true,
    },
    {
      columnKey: 'active',
      field: 'active',
      header: t('digimonListing.l_active'),
      sortable: true,
    },
    {
      columnKey: 'itemDrop.name',
      field: 'itemDrop.name',
      header: t('digimonListing.l_item'),
      sortable: true,
    },
    {
      columnKey: 'techInitial.name',
      field: 'techInitial.name',
      header: t('digimonListing.l_iniTech'),
      sortable: true,
    },
    {
      columnKey: 'techFinal.name',
      field: 'techFinal.name',
      header: t('digimonListing.l_finishMove'),
      sortable: true,
    },
    {
      columnKey: 'techs',
      body: mapTechs,
      header: t('digimonListing.l_techs'),
    },
    {
      columnKey: 'recruitable',
      body: mapRecruitable,
      header: t('digimonListing.l_recruitable'),
    },
    {
      columnKey: 'raisable',
      body: mapRaisable,
      header: t('digimonListing.l_raisable'),
    },
    {
      columnKey: 'location.happy',
      body: mapLocationHappy,
      header: t('digimonListing.l_locationHappy'),
    },
    {
      columnKey: 'location.Sad',
      body: mapLocationSad,
      header: t('digimonListing.l_locationSad'),
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default DigimonListing;
