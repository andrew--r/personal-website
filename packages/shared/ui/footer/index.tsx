import cn from 'classnames';
import { VNode } from 'preact';
import { Navigation } from '#ui/navigation/index.js';

type Props = {
  className: string;
  children: VNode;
};

export function Footer({ className, children }: Props) {
  return (
    <footer class={cn('footer', className)}>
      <Navigation>
        <a rel="me" href="https://github.com/andrew--r">
          GitHub
        </a>

        <a rel="me" href="https://twitter.com/andrew__romanov">
          Twitter
        </a>

        <a rel="me" href="https://t.me/andrew_r">
          Telegram
        </a>
      </Navigation>

      {children}
    </footer>
  );
}
