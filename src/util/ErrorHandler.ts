import VALUES from '@/constants/Dw1Constants';
import type { severity } from '@/types/severity';
import { Messages } from 'primereact/messages';
import type { RefObject } from 'react';

const showMessage = (
  message: RefObject<Messages>,
  summary: string,
  type: severity,
  detail: string
): void =>
  message.current?.show({
    life: VALUES.MSG.MSG_LIFE,
    severity: type,
    summary: `${summary}: `,
    detail: detail,
  });

export { showMessage };
