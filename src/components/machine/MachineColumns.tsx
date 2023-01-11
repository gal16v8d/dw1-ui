import Machine from 'api/model/mongo/Machine';
import Dw1YesOrNo from 'components/ui/Dw1YesOrNo';
import { TFunction } from 'i18next';
import isEmpty from 'lodash/isEmpty';
import { ColumnProps } from 'primereact/column';
import { DataScroller } from 'primereact/datascroller';

const mapProducts = (rowData: Machine): JSX.Element | null =>
  !isEmpty(rowData?.product ?? []) ? (
    <DataScroller
      value={rowData.product}
      itemTemplate={(product: { name: string; price: number }) => (
        <div className="container" style={{ display: 'flex' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
            {product.name}:
          </span>
          <span>{product.price} bits</span>
        </div>
      )}
      rows={5}
      buffer={0.5}
    />
  ) : null;

const mapRandom = (rowData: Machine): JSX.Element => (
  <Dw1YesOrNo value={rowData?.random} />
);

export const machineColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
  {
    columnKey: 'location.name',
    field: 'location.name',
    header: t('machineListing.l_location'),
    sortable: true,
  },
  {
    columnKey: 'product',
    body: mapProducts,
    header: t('machineListing.l_products'),
  },
  {
    columnKey: 'random',
    body: mapRandom,
    header: t('machineListing.l_random'),
  },
];
