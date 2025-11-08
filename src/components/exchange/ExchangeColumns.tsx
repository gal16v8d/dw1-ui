import type { TFunction } from 'i18next';
import type { ColumnProps } from 'primereact/column';

export const exchangeColumns = (
  t: TFunction<'translation', undefined>
): Array<ColumnProps> => [
  {
    columnKey: 'who',
    field: 'who',
    header: t('exchangeListing.l_who'),
    sortable: true,
  },
  {
    columnKey: 'base',
    field: 'base',
    header: t('exchangeListing.l_base'),
    sortable: true,
  },
  {
    columnKey: 'result',
    field: 'result',
    header: t('exchangeListing.l_result'),
    sortable: true,
  },
];
