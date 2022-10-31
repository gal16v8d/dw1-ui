import Item from 'api/model/mongo/Item';
import { useGetAll } from 'api/service/hooks/useGenericService';
import ItemService from 'api/service/ItemService';
import Dw1Listing from 'components/ui/Dw1Listing';
import Dw1MapLocations from 'components/ui/Dw1MapLocations';
import VALUES from 'constants/Dw1Constants';
import isEmpty from 'lodash/isEmpty';
import { Chip } from 'primereact/chip';
import { DataScroller } from 'primereact/datascroller';
import { useTranslation } from 'react-i18next';

const ItemListing = (): JSX.Element => {
  const { t } = useTranslation();
  const { data } = useGetAll(
    VALUES.API_OBJECT.ITEM.QUERY_KEY,
    ItemService,
    true
  );

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

  return (
    <Dw1Listing
      apiData={data}
      columns={columns}
      imageColumn={VALUES.API_OBJECT.ITEM.IMAGE}
    />
  );
};

export default ItemListing;
