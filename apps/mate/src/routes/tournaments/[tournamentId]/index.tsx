import { component$ } from '@builder.io/qwik';
import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import { Tabs } from '@components';

export const useTournamentData = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    `http://localhost:4006/api/tournaments/${requestEvent.params.tournamentId}`,
  );
  const tournament = await res.json();
  return tournament;
});

export const useTournamentRanking = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    `http://localhost:4006/api/tournaments/${requestEvent.params.tournamentId}/ranking`,
  );
  const ranking = (await res.json()) as {
    items: { name: string; points: number; id: string }[];
    count: number;
  };
  return ranking;
});

type TournamentGame = {
  id: string;
  scores: {
    id: string;
    gamePoints: number;
    player: {
      id: string;
      name: string;
    };
  }[];
};

interface TournamentGames {
  items: TournamentGame[];
  count: number;
}
export const useTournamentGames = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    `http://localhost:4006/api/games?tournamentId=${requestEvent.params.tournamentId}`,
  );

  const ranking = (await res.json()) as TournamentGames;
  return ranking;
});

export default component$(() => {
  const tournament = useTournamentData().value;
  const ranking = useTournamentRanking().value;
  const games = useTournamentGames().value;

  return (
    <>
      <h1 class="ml-4 text-xl">{tournament.name}</h1>
      <Tabs
        tabs={[
          {
            id: 'raking',
            label: 'Ranking',
            child:
              ranking &&
              ranking.items.map((item, i) => (
                <div key={item.id} class="flex flex-row">
                  <p class="w-1/6">{i + 1}</p>
                  <p class="w-2/3">{item.name}</p>
                  <p class="w-1/6 text-right">{item.points}</p>
                </div>
              )),
          },
          {
            id: 'scores',
            label: 'Scores',
            child:
              games &&
              games.items.map((game) => <Score game={game} key={game.id} />),
          },
        ]}
      />
    </>
  );
});

export const head: DocumentHead = ({ resolveValue, params }) => {
  const tournament = resolveValue(useTournamentData);
  return {
    title: `Tournament "${tournament.name}"`,
    meta: [
      {
        name: 'id',
        content: params.tournamentId,
      },
    ],
  };
};

interface ScoreProps {
  game: TournamentGame;
}
const Score = component$(({ game }: ScoreProps) => {
  return (
    <div key={game.id} class="border border-zinc-400 p-2">
      {game.scores.map((score) => (
        <div key={score.id}>
          <div
            class={`flex justify-between ${
              Number(score.gamePoints) ===
                Math.max(...game.scores.map((x) => x.gamePoints)) && 'font-bold'
            }`}
          >
            <p class="w-4/5">{score.player.name}</p>
            <p class="w-1/5 text-right">{score.gamePoints}</p>
          </div>
        </div>
      ))}
    </div>
  );
});
