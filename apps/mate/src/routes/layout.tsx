import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class="px-4 py-6">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer></footer>
    </>
  );
});
