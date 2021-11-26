import isEmpty from 'lodash/isEmpty';
import { Chip } from 'primereact/chip';
import { DataScroller } from 'primereact/datascroller';
import Item from '../../api/model/mongo/Item';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import ItemService from '../../api/service/ItemService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';
import Dw1MapLocations from '../ui/Dw1MapLocations';

const ItemListing = (): JSX.Element => {
  const { data } = useGetAll(VALUES.API_OBJECT.ITEM.QUERY_KEY, ItemService, 1);

  const mapLocations = (rowData: Item) => {
    return (
      <Dw1MapLocations
        locations={rowData?.location}
        additionalClassName={'good-chip'}
      />
    );
  };

  const mapEffects = (rowData: Item) => {
    return (
      !isEmpty(rowData?.effect ?? []) && (
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
      )
    );
  };

  const columns = [
    { columnKey: 'name', field: 'name', header: 'Name', sortable: true },
    { columnKey: 'effects', body: mapEffects, header: 'Effects' },
    { columnKey: 'locations', body: mapLocations, header: 'Locations' },
    {
      columnKey: 'note',
      field: 'note',
      header: 'Note',
      sortable: true,
    },
  ];

  return (
    <Dw1Listing
      apiData={data}
      columns={columns}
      imageColumn={VALUES.API_OBJECT.ITEM.IMAGE}
    />
  );
};

export default ItemListing;
