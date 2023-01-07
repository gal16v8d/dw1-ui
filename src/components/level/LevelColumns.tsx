import { TFunction } from 'i18next';
import { ColumnProps } from 'primereact/column';

export const levelColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
  {
    columnKey: 'name',
    field: 'name',
    header: t('levelListing.l_name'),
    sortable: true,
  },
];
