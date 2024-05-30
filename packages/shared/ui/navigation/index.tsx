import { VNode, toChildArray } from 'preact';

type Props = {
  children: VNode[];
};

export function Navigation({ children }: Props) {
  return (
    <ul class="navigation">
      {toChildArray(children).map((child) => (
        <li class="navigation__item">{child}</li>
      ))}
    </ul>
  );
}
