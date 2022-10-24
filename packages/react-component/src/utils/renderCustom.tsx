import type { ReactNode } from 'react';

type defaultRenderFn = (...args: unknown[]) => ReactNode | string;

export type customRenderFn<T = defaultRenderFn> = T | undefined;

export function renderCustom(
  renderFn: any,
  ...args: unknown[]
): ReactNode | null {
  if (!renderFn) return null;

  const renderedContent = renderFn(...args);
  if (typeof renderedContent === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: renderedContent }}></div>;
  }
  return renderedContent;
}
