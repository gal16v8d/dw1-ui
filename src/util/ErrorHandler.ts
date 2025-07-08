import VALUES from '@/constants/Dw1Constants';
import type { Severity } from '@/types/severity';
import { Messages } from 'primereact/messages';
import type { RefObject } from 'react';

const displayNotification = (
  message: RefObject<Messages>,
  summary: string,
  type: Severity,
  detail: string
): void =>
  message.current?.show({
    life: VALUES.MSG.MSG_LIFE,
    severity: type,
    summary: `${summary}: `,
    detail: detail,
  });

export { displayNotification };
