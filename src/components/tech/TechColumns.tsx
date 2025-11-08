import type { TFunction } from 'i18next';
import type { ColumnProps } from 'primereact/column';

export const techColumns = (
  t: TFunction<'translation', undefined>
): Array<ColumnProps> => [
  {
    columnKey: 'number',
    field: 'number',
    header: t('techListing.l_number'),
    sortable: true,
  },
  {
    columnKey: 'name',
    field: 'name',
    header: t('techListing.l_name'),
    sortable: true,
  },
  {
    columnKey: 'power',
    field: 'power',
    header: t('techListing.l_power'),
    sortable: true,
  },
  {
    columnKey: 'mp',
    field: 'mp',
    header: t('techListing.l_mp'),
    sortable: true,
  },
  {
    columnKey: 'rang',
    field: 'rang',
    header: t('techListing.l_rang'),
    sortable: true,
  },
  {
    columnKey: 'spec',
    field: 'spec',
    header: t('techListing.l_spec'),
    sortable: true,
  },
  {
    columnKey: 'element.name',
    field: 'element.name',
    header: t('techListing.l_element'),
    sortable: true,
  },
];
