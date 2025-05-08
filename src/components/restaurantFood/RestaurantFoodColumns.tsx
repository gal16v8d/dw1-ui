import RestaurantFood from '@/api/model/mongo/RestaurantFood';
import type { TFunction } from 'i18next';
import isEmpty from 'lodash/isEmpty';
import { Chip } from 'primereact/chip';
import type { ColumnProps } from 'primereact/column';
import { DataScroller } from 'primereact/datascroller';

const mapEffects = (rowData: RestaurantFood): React.ReactNode | null =>
  !isEmpty(rowData?.effect ?? []) ? (
    <DataScroller
      value={rowData.effect}
      itemTemplate={(effect: string) => (
        <Chip label={effect} className={'p-mr-2 p-mb-2 good-chip'} />
      )}
      rows={5}
      buffer={0.5}
    />
  ) : null;

export const restaurantFoodColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
  {
    columnKey: 'name',
    field: 'name',
    header: t('restaurantFoodListing.l_name'),
    sortable: true,
  },
  {
    columnKey: 'price',
    field: 'price',
    header: t('restaurantFoodListing.l_price'),
    sortable: true,
  },
  {
    columnKey: 'effects',
    body: mapEffects,
    header: t('restaurantFoodListing.l_effects'),
  },
];
