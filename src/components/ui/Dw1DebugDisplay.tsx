import { useDw1Store } from '@/state/Dw1Store';
import { JsonViewer } from '@textea/json-viewer';

interface Dw1DebugProps {
  data: unknown;
  collapsed?: boolean;
}

const Dw1DebugDisplay = ({ data }: Dw1DebugProps) => {
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
      <JsonViewer value={data} theme={'dark'} />
    </div>
  );
};

export default Dw1DebugDisplay;
