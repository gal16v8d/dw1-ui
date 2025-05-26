import { useListingContext } from '@/provider/listing/Dw1ListingProvider';
import { Badge } from 'primereact/badge';
import type { FC, ReactElement } from 'react';

interface Dw1YesOrNoProps {
  value: boolean;
}

const Dw1YesOrNo: FC<Dw1YesOrNoProps> = ({ value }): ReactElement => {
  const { t } = useListingContext();

  return (
    <Badge
      value={value ? t('baseComponent.yes') : t('baseComponent.no')}
      severity={value ? 'success' : 'danger'}
      className="p-mr-2"
    ></Badge>
  );
};

export default Dw1YesOrNo;
