import type { TFunction } from 'i18next';
import type { ColumnProps } from 'primereact/column';

export const statusColumns = (
  t: TFunction<'translation', undefined>
): Array<ColumnProps> => [
  {
    columnKey: 'name',
    field: 'name',
    header: t('statusListing.l_name'),
    sortable: true,
  },
  {
    columnKey: 'description',
    field: 'description',
    header: t('statusListing.l_description'),
    sortable: true,
  },
];
