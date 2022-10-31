import Card from 'api/model/mongo/Card';
import Dw1YesOrNo from 'components/ui/Dw1YesOrNo';
import { ColumnProps } from 'primereact/column';
import { TFunction } from 'react-i18next';

const mapExchangeable = (rowData: Card) => (
  <Dw1YesOrNo value={rowData?.exchangeable} />
);

export const getCardColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => {
  return [
    {
      columnKey: 'number',
      field: 'number',
      header: t('cardListing.l_number'),
      sortable: true,
    },
    {
      columnKey: 'name',
      field: 'name',
      header: t('cardListing.l_name'),
      sortable: true,
    },
    {
      columnKey: 'point',
      field: 'point',
      header: t('cardListing.l_point'),
      sortable: true,
    },
    {
      columnKey: 'price',
      field: 'price',
      header: `${t('cardListing.l_price')} (Bits)`,
      sortable: true,
    },
    {
      columnKey: 'exchangeable',
      body: mapExchangeable,
      header: t('cardListing.l_exchangeable'),
      sortable: false,
    },
  ];
};
