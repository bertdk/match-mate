import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { Heading } from '@components';

export default component$(() => {
  return (
    <div>
      <Heading text="Match Mate" />
      <p>Api url: {import.meta.env.PUBLIC_API_URL}</p>
      <p>Mode: {import.meta.env.MODE}</p>
      <p>Dev: {import.meta.env.DEV && 'yes'}</p>
      <p>Prod: {import.meta.env.PROD && 'yes'}</p>
      <Link href="/tournaments/create">Start a new tournament</Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Match Mate',
  meta: [
    {
      name: 'description',
      content: 'Match Mate app to keep track of your tournament scores',
    },
  ],
};
