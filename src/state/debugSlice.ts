import { StateCreator } from 'zustand';

export interface DebugProps {
  debugEnabled: boolean;
  updateDebugState: () => void;
}

export const debugSlice: StateCreator<DebugProps> = (set) => ({
  debugEnabled: false,
  updateDebugState: () =>
    set((state) => ({ debugEnabled: !state.debugEnabled })),
});
