import { useDw1Store } from '@/state/Dw1Store';
import ReactJson from 'react-json-view';

interface Dw1DebugProps {
  data: unknown;
  collapsed?: boolean;
}

const Dw1DebugDisplay = ({ data, collapsed = true }: Dw1DebugProps) => {
  const { debugEnabled } = useDw1Store();

  if (!data || !debugEnabled) {
    return null;
  }

  return (
    <div
      style={{
        background: 'rgb(11, 28, 44)',
        padding: '1rem',
        marginTop: '2rem',
      }}
    >
      <ReactJson src={data} theme="harmonic" collapsed={collapsed} />
    </div>
  );
};

export default Dw1DebugDisplay;
