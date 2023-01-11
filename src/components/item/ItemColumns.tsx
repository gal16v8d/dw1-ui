import Item from 'api/model/mongo/Item';
import Dw1MapLocations from 'components/ui/Dw1MapLocations';
import { TFunction } from 'i18next';
import isEmpty from 'lodash/isEmpty';
import { Chip } from 'primereact/chip';
import { ColumnProps } from 'primereact/column';
import { DataScroller } from 'primereact/datascroller';

const mapLocations = (rowData: Item): JSX.Element => (
  <Dw1MapLocations
    locations={rowData?.location}
    additionalClassName={'good-chip'}
  />
);

const mapEffects = (rowData: Item): JSX.Element | null =>
  !isEmpty(rowData?.effect ?? []) ? (
    <DataScroller
      value={rowData.effect}
      itemTemplate={(effect: string) => (
        <Chip
          label={effect}
          className={`p-mr-2 p-mb-2 ${
            effect.indexOf('Sickness') ? 'good-chip' : 'bad-chip'
          }`}
        />
      )}
      rows={5}
      buffer={0.5}
    />
  ) : null;

export const itemColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
  {
    columnKey: 'name',
    field: 'name',
    header: t('itemListing.l_name'),
    sortable: true,
  },
  {
    columnKey: 'effects',
    body: mapEffects,
    header: t('itemListing.l_effects'),
  },
  {
    columnKey: 'locations',
    body: mapLocations,
    header: t('itemListing.l_locations'),
  },
  {
    columnKey: 'note',
    field: 'note',
    header: t('itemListing.l_note'),
    sortable: true,
  },
];
