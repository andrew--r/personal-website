import { type VNode } from 'preact';

export const resolveContent = (content: VNode | string) =>
  typeof content === 'string'
    ? { dangerouslySetInnerHTML: { __html: content } }
    : { children: content };
