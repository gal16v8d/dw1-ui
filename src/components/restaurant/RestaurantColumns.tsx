import Restaurant from 'api/model/mongo/Restaurant';
import RestaurantFood from 'api/model/mongo/RestaurantFood';
import { TFunction } from 'i18next';
import isEmpty from 'lodash/isEmpty';
import { Chip } from 'primereact/chip';
import { ColumnProps } from 'primereact/column';
import { DataScroller } from 'primereact/datascroller';

const mapFood = (rowData: Restaurant): JSX.Element | null =>
  !isEmpty(rowData?.restaurantFood ?? []) ? (
    <DataScroller
      value={rowData.restaurantFood}
      itemTemplate={(food: RestaurantFood) => (
        <Chip label={food.name} className={'p-mr-2 p-mb-2 good-chip'} />
      )}
      rows={5}
      buffer={0.5}
    />
  ) : null;

export const restaurantColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
  {
    columnKey: 'digimon',
    field: 'digimon.name',
    header: t('restaurantListing.l_digimon'),
    sortable: true,
  },
  {
    columnKey: 'restaurantFood',
    header: t('restaurantListing.l_food'),
    body: mapFood,
  },
];
