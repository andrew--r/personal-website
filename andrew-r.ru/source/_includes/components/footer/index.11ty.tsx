import cn from 'classnames';

export function Footer({ className }: { className: string }) {
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

      <p>Этот сайт не следит за вами и не собирает никакие данные.</p>
    </footer>
  );
}
