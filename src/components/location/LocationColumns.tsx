import type { TFunction } from 'i18next';
import type { ColumnProps } from 'primereact/column';

export const locationColumns = (
  t: TFunction<'translation', undefined>
): Array<ColumnProps> => [
  {
    columnKey: 'name',
    field: 'name',
    header: t('locationListing.l_name'),
    sortable: true,
  },
];
