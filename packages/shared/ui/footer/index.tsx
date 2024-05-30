import cn from 'classnames';
import { VNode } from 'preact';

type Props = {
  className: string;
  children: VNode;
};

export function Footer({ className, children }: Props) {
  return (
    <footer class={cn('footer', className)}>
      <ul class="navigation">
        <li class="navigation__item">
          <a rel="me" href="https://github.com/andrew--r">
            GitHub
          </a>
        </li>
        <li class="navigation__item">
          <a rel="me" href="https://twitter.com/andrew__romanov">
            Twitter
          </a>
        </li>
        <li class="navigation__item">
          <a rel="me" href="https://t.me/andrew_r">
            Telegram
          </a>
        </li>
      </ul>

      {children}
    </footer>
  );
}
