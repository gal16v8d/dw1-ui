import type { TFunction } from 'i18next';
import type { ColumnProps } from 'primereact/column';

export const meritPointColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
  {
    columnKey: 'item.name',
    field: 'item.name',
    header: t('meritPointListing.l_item'),
    sortable: true,
  },
  {
    columnKey: 'point',
    field: 'point',
    header: t('meritPointListing.l_point'),
    sortable: true,
  },
];
