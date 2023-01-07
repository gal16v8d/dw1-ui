import { TFunction } from 'i18next';
import { ColumnProps } from 'primereact/column';

export const elementColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
  {
    columnKey: 'name',
    field: 'name',
    header: t('elementListing.l_name'),
    sortable: true,
  },
];
