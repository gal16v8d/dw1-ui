import Card from '@/api/model/mongo/Card';
import Dw1YesOrNo from '@/components/ui/Dw1YesOrNo';
import { TFunction } from 'i18next';
import { ColumnProps } from 'primereact/column';

const mapExchangeable = (rowData: Card): React.ReactNode => (
  <Dw1YesOrNo value={rowData?.exchangeable} />
);

export const cardColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
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
