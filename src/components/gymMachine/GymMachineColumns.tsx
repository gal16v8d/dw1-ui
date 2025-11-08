import GymMachine from '@/api/model/mongo/GymMachine';
import type { TFunction } from 'i18next';
import type { ColumnProps } from 'primereact/column';
import { Image } from 'primereact/image';
import type { ReactNode } from 'react';

const parameterImages = import.meta.glob<{ default: string }>(
  '@/assets/parameters/*.png',
  {
    eager: true,
  }
);

const getImageFromValue = (rowData: GymMachine, value: string): ReactNode => {
  const imageModule = parameterImages[`/src/assets/parameters/${value}.png`];
  return (
    <Image
      key={`${rowData._id}-train-${value}`}
      src={imageModule?.default}
      alt={value}
    />
  );
};

const mapTrainProps = (rowData: GymMachine): Array<ReactNode> =>
  rowData.train.map((value) => getImageFromValue(rowData, value));

export const gymMachineColumns = (
  t: TFunction<'translation', undefined>
): Array<ColumnProps> => [
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
