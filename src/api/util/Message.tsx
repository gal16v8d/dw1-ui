interface Message {
  id?: string;
  severity?: 'success' | 'info' | 'warn' | 'error';
  summary?: React.ReactNode;
  detail?: React.ReactNode;
  closable?: boolean;
  sticky?: boolean;
  life?: number;
}

export default Message;
