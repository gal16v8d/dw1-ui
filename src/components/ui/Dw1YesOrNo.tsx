import { Badge } from 'primereact/badge';
import { useTranslation } from 'react-i18next';

interface Dw1YesOrNoProps {
  value: boolean;
}

const Dw1YesOrNo: React.FC<Dw1YesOrNoProps> = ({ value }): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Badge
      value={value ? t('baseComponent.yes') : t('baseComponent.no')}
      severity={value ? 'success' : 'danger'}
      className="p-mr-2"
    ></Badge>
  );
};

export default Dw1YesOrNo;
