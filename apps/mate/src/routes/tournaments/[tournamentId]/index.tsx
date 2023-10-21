import { component$ } from '@builder.io/qwik';
import { DocumentHead, routeLoader$, useLocation } from '@builder.io/qwik-city';

export const useTournamentData = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    `http://localhost:4006/api/tournaments/${requestEvent.params.tournamentId}`
  );
  const tournament = await res.json();
  return tournament;
});

export default component$(() => {
  const loc = useLocation();
  const tournament = useTournamentData().value;
  return (
    <>
      <p>{loc.params.tournamentId}</p>
      <p>{tournament.name}</p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Tournament',
};
