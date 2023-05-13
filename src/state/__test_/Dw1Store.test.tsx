import { useDw1Store } from '@/state/Dw1Store';
import { act, cleanup, renderHook } from '@testing-library/react';

describe('Dw1Store tests', () => {
  afterEach(() => cleanup());

  it('Allows to set data in store', () => {
    const { result } = renderHook(() => useDw1Store((state) => state));
    act(() => {
      expect(result.current.debugEnabled).toBeFalsy();
      result.current.updateDebugState();
    });
    expect(result.current.debugEnabled).toBeTruthy();
  });
});
