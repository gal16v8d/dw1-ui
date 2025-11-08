import type { TFunction } from 'i18next';
import type { ColumnProps } from 'primereact/column';

export const elementColumns = (
  t: TFunction<'translation', undefined>
): Array<ColumnProps> => [
  {
    columnKey: 'name',
    field: 'name',
    header: t('elementListing.l_name'),
    sortable: true,
  },
];
