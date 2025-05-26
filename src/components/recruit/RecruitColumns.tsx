import Recruit from '@/api/model/mongo/Recruit';
import Dw1MapLocations from '@/components/ui/Dw1MapLocations';
import type { TFunction } from 'i18next';
import type { ColumnProps } from 'primereact/column';
import type { ReactNode } from 'react';

const mapLocations = (rowData: Recruit): ReactNode => (
  <Dw1MapLocations
    locations={rowData?.location}
    identifier={'recruit-location'}
    additionalClassName={'good-chip'}
  />
);

export const recruitColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
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
