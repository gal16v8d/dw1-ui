import { ProgressSpinner } from 'primereact/progressspinner';

const Dw1Spinner = (): JSX.Element => (
  <ProgressSpinner
    style={{ width: '50px', height: '50px' }}
    strokeWidth="8"
    fill="#EEEEEE"
    animationDuration=".5s"
  />
);

export default Dw1Spinner;
