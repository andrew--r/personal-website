import { Fragment } from 'preact';
import { EleventyContent } from '../../11ty/index.js';
import { resolveContent } from '../../lib/resolve-content.js';

type Props = {
  children: EleventyContent;
  class?: string;
};
export function ChildContent({ children, class: className }: Props) {
  if (!children) {
    return null;
  }

  return <div class={className} {...resolveContent(children)} />;
}
