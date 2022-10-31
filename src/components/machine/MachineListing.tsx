import Machine from 'api/model/mongo/Machine';
import { useGetAll } from 'api/service/hooks/useGenericService';
import MachineService from 'api/service/MachineService';
import Dw1Listing from 'components/ui/Dw1Listing';
import Dw1YesOrNo from 'components/ui/Dw1YesOrNo';
import VALUES from 'constants/Dw1Constants';
import isEmpty from 'lodash/isEmpty';
import { DataScroller } from 'primereact/datascroller';
import { useTranslation } from 'react-i18next';

const MachineListing = (): JSX.Element => {
  const { t } = useTranslation();
  const { data } = useGetAll(
    VALUES.API_OBJECT.MACHINE.QUERY_KEY,
    MachineService,
    true
  );

  const mapProducts = (rowData: Machine) => {
    return (
      !isEmpty(rowData?.product ?? []) && (
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
      )
    );
  };

  const mapRandom = (rowData: Machine) => {
    return <Dw1YesOrNo value={rowData?.random} />;
  };

  const columns = [
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

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default MachineListing;
