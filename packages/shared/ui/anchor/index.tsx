import type { ComponentChildren } from 'preact';

export function Anchor({
  id,
  children,
}: {
  id: string;
  children: ComponentChildren;
}) {
  return (
    <a class="link_unstyled" href={`#${id}`}>
      {children}
    </a>
  );
}
