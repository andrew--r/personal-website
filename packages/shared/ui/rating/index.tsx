import cn from 'classnames';

type Props = {
  value: number;
};

export function Rating({ value }: Props) {
  return (
    <span
      class={cn('nobr', 'rating', { rating_best: value === 5 })}
      aria-label={`Rated ${value} out of 5 stars`}
      role="img"
    >
      {[1, 2, 3, 4, 5].map((i) => (i <= value ? '★' : '☆'))}
    </span>
  );
}
