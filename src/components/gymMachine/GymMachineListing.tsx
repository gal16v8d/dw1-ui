import GymMachine from 'api/model/mongo/GymMachine';
import GymMachineService from 'api/service/GymMachineService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { Image } from 'primereact/image';
import { useTranslation } from 'react-i18next';

const GymMachineListing = (): JSX.Element => {
  const { t } = useTranslation();
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
    {
      columnKey: 'name',
      field: 'name',
      header: t('gymMachineListing.l_name'),
      sortable: true,
    },
    {
      columnKey: 'location.name',
      field: 'location.name',
      header: t('gymMachineListing.l_location'),
      sortable: true,
    },
    {
      columnKey: 'train',
      body: mapTrainProps,
      header: t('gymMachineListing.l_train'),
      sortable: false,
    },
  ];

  return <Dw1Listing apiData={data} columns={columns} />;
};

export default GymMachineListing;
