import GymMachine from '@/api/model/mongo/GymMachine';
import { TFunction } from 'i18next';
import { ColumnProps } from 'primereact/column';
import { Image } from 'primereact/image';

const mapTrainProps = (rowData: GymMachine): JSX.Element[] =>
  rowData.train.map((value) => (
    <Image
      key={`${rowData._id}-train-${value}`}
      src={`assets/img/parameters/${value}.png`}
      alt={value}
    />
  ));

export const gymMachineColumns = (
  t: TFunction<'translation', undefined>
): ColumnProps[] => [
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
