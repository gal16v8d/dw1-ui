import { TFunction } from 'i18next';
import { ColumnProps } from 'primereact/column';

export const menuColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
  {
    columnKey: 'name',
    field: 'name',
    header: t('menuListing.l_name'),
    sortable: true,
  },
  {
    columnKey: 'type',
    field: 'type',
    header: t('menuListing.l_type'),
    sortable: true,
  },
  {
    columnKey: 'description',
    field: 'description',
    header: t('menuListing.l_description'),
    sortable: true,
  },
];
