import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { DebugProps } from './debugSlice';
import { debugSlice } from './debugSlice';

export type Dw1StorageData = DebugProps;

const withDevTools = (
  import.meta.env.DEV ? devtools : (fn: unknown) => fn
) as typeof devtools;

export const useDw1Store = create<DebugProps>()(
  persist(
    withDevTools(
      (...rest) => ({
        ...debugSlice(...rest),
      }),
      { name: 'Dw1 Store' }
    ),
    {
      // name of item in storage (must be unique)
      name: 'dw1-settings',
    }
  )
);
