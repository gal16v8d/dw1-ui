import { TFunction } from 'i18next';
import { ColumnProps } from 'primereact/column';

export const medalColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
  {
    columnKey: 'number',
    field: 'number',
    header: t('medalListing.l_number'),
    sortable: true,
  },
  {
    columnKey: 'name',
    field: 'name',
    header: t('medalListing.l_name'),
    sortable: true,
  },
  {
    columnKey: 'description',
    field: 'description',
    header: t('medalListing.l_description'),
    sortable: true,
  },
];
