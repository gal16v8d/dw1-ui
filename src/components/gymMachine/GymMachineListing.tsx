import { Column } from 'primereact/column';
import { Image } from 'primereact/image';
import GymMachine from '../../api/model/GymMachine';
import GymMachineService from '../../api/service/GymMachineService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const GymMachineListing = (): JSX.Element => {
  const { data } = useGetAll(
    VALUES.API_OBJECT.GYM_MACHINE.QUERY_KEY,
    GymMachineService
  );

  const columns = [
    { field: 'name', header: 'Name' },
    { field: 'location.name', header: 'Location' },
  ];

  const mapTrainProps = (rowData: GymMachine) => {
    return rowData.train.map((value) => (
      <Image
        key={`${rowData._id}-train-${value}`}
        src={`assets/img/${value}.png`}
        alt={value}
      />
    ));
  };

  return (
    <Dw1Listing
      apiData={data}
      columns={columns}
      additionalColumn={true}
      additionalColumnBody={<Column body={mapTrainProps} header={'Train'} />}
    />
  );
};

export default GymMachineListing;
