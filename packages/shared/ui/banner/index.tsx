type Props = {
  text: string;
};

export function Banner({ text }: Props) {
  return (
    <section class="banner">
      <h1>
        <a href="https://standwithukraine.com.ua">{text}</a>
      </h1>
    </section>
  );
}
