import cn from 'classnames';
import { useEleventytyProps } from 'shared/11ty/context.js';

export function Header({ className }: { className: string }) {
  const { page, site } = useEleventytyProps();

  return (
    <header class={cn('header', className, { header_home: page.url === '/' })}>
      <div class="header__title">
        <a class="link link_unstyled" href="/">
          Андрей Романов
        </a>{' '}
        <sup>
          <a class="caps" href="https://andreyromanov.com">
            EN
          </a>
        </sup>
      </div>

      <nav>
        <ul class="navigation">
          {site.navigationLinks.map((navigationLink) => (
            <li class="navigation__item">
              <a
                class={cn('link', {
                  link_active:
                    page.url.startsWith(navigationLink.url) &&
                    (page.url === '/' || navigationLink.url !== '/'),
                })}
                href={navigationLink.url}
              >
                {navigationLink.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
