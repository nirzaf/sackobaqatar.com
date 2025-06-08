interface Window {
  gtag: (
    command: 'event' | 'config' | 'set',
    targetId: string,
    params?: { [key: string]: any }
  ) => void;
}
