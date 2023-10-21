import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Welcome to Match Mate</h1>

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
