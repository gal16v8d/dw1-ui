import { ProgressSpinner } from 'primereact/progressspinner';
import type { ReactElement } from 'react';

const Dw1Spinner = (): ReactElement => (
  <ProgressSpinner
    style={{ width: '50px', height: '50px' }}
    strokeWidth="8"
    fill="#EEEEEE"
    animationDuration=".5s"
  />
);

export default Dw1Spinner;
