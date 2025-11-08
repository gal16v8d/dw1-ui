import type { TFunction } from 'i18next';
import type { ColumnProps } from 'primereact/column';

export const levelColumns = (
  t: TFunction<'translation', undefined>
): Array<ColumnProps> => [
  {
    columnKey: 'name',
    field: 'name',
    header: t('levelListing.l_name'),
    sortable: true,
  },
];
