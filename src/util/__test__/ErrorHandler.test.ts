import { Messages } from 'primereact/messages';
import { describe, expect, test, vi } from 'vitest';
import { displayNotification } from '../ErrorHandler';

describe('displayNotification', () => {
  test('calls show on Messages component', () => {
    const mockMessages = { show: vi.fn() }; // Mock the Messages component
    const messageRef = {
      current: mockMessages,
    } as unknown as React.RefObject<Messages>; // Mock the RefObject

    displayNotification(messageRef, 'Test Summary', 'success', 'Test Detail');

    expect(mockMessages.show).toHaveBeenCalledWith({
      life: 5000,
      severity: 'success',
      summary: 'Test Summary: ',
      detail: 'Test Detail',
    });
  });
});
