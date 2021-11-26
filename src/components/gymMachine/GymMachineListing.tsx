import { Image } from 'primereact/image';
import GymMachine from '../../api/model/GymMachine';
import GymMachineService from '../../api/service/GymMachineService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const GymMachineListing = (): JSX.Element => {
  const { data } = useGetAll(
    VALUES.API_OBJECT.GYM_MACHINE.QUERY_KEY,
    GymMachineService,
    1
  );

  const mapTrainProps = (rowData: GymMachine) => {
    return rowData.train.map((value) => (
      <Image
        key={`${rowData._id}-train-${value}`}
        src={`assets/img/parameters/${value}.png`}
        alt={value}
      />
    ));
  };

  const columns = [
    { columnKey: 'name', field: 'name', header: 'Name', sortable: true },
    {
      columnKey: 'location.name',
      field: 'location.name',
      header: 'Location',
      sortable: true,
    },
    {
      columnKey: 'train',
      body: mapTrainProps,
      header: 'Train',
      sortable: false,
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default GymMachineListing;
