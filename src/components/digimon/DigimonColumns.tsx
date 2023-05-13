import Digimon from '@/api/model/mongo/Digimon';
import Tech from '@/api/model/mongo/Tech';
import Dw1MapLocations from '@/components/ui/Dw1MapLocations';
import Dw1YesOrNo from '@/components/ui/Dw1YesOrNo';
import { TFunction } from 'i18next';
import isEmpty from 'lodash/isEmpty';
import { Chip } from 'primereact/chip';
import { ColumnProps } from 'primereact/column';
import { DataScroller } from 'primereact/datascroller';

const mapTechs = (rowData: Digimon): JSX.Element | null =>
  !isEmpty(rowData?.tech ?? []) ? (
    <DataScroller
      value={rowData.tech}
      itemTemplate={(tech: Tech) => (
        <Chip label={tech.name} className={'p-mr-2 p-mb-2 good-chip'} />
      )}
      rows={5}
      buffer={0.5}
    />
  ) : null;

const mapRecruitable = (rowData: Digimon): JSX.Element => (
  <Dw1YesOrNo value={!!rowData?.recruitable} />
);

const mapRaisable = (rowData: Digimon): JSX.Element => (
  <Dw1YesOrNo value={!!rowData?.raisable} />
);

const mapLocationHappy = (rowData: Digimon): JSX.Element => (
  <Dw1MapLocations
    locations={rowData?.locationHappy}
    identifier={'digimon-happy-location'}
    additionalClassName={'good-chip'}
  />
);

const mapLocationSad = (rowData: Digimon): JSX.Element => (
  <Dw1MapLocations
    locations={rowData?.locationSad}
    identifier={'digimon-sad-location'}
    additionalClassName={'bad-chip'}
  />
);

export const digimonColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
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
