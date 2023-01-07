import { TFunction } from 'i18next';
import { ColumnProps } from 'primereact/column';

export const locationColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
  {
    columnKey: 'name',
    field: 'name',
    header: t('locationListing.l_name'),
    sortable: true,
  },
];
