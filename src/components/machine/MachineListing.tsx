import Machine from '../../api/model/Machine';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import MachineService from '../../api/service/MachineService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';
import Dw1YesOrNo from '../ui/Dw1YesOrNo';
import { DataScroller } from 'primereact/datascroller';
import isEmpty from 'lodash/isEmpty';

const MachineListing = (): JSX.Element => {
  const { data } = useGetAll(
    VALUES.API_OBJECT.MACHINE.QUERY_KEY,
    MachineService,
    1
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
      header: 'Location',
      sortable: true,
    },
    {
      columnKey: 'product',
      body: mapProducts,
      header: 'Products',
    },
    {
      columnKey: 'random',
      body: mapRandom,
      header: 'Random',
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default MachineListing;
