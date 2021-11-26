import { Badge } from 'primereact/badge';

interface Dw1YesOrNoProps {
  value: boolean;
}

const Dw1YesOrNo: React.FC<Dw1YesOrNoProps> = ({ value }): JSX.Element => {
  return (
    <Badge
      value={value ? 'yes' : 'no'}
      severity={value ? 'success' : 'error'}
      className="p-mr-2"
    ></Badge>
  );
};

export default Dw1YesOrNo;
