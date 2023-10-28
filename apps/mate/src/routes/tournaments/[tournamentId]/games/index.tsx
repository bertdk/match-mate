import { component$ } from '@builder.io/qwik';
import {
  DocumentHead,
  Form,
  routeAction$,
  routeLoader$,
  useLocation,
  useNavigate,
  z,
  zod$,
} from '@builder.io/qwik-city';
import { BasicInput, Button, SelectInput } from '@components';

const formSchema = {
  scores: z.array(
    z.object({
      playerId: z.string().uuid(),
      gamePoints: z.coerce.number().min(0).max(100),
    }),
  ),
};

export const usePlayersData = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    `http://localhost:4006/api/players/tournaments/${requestEvent.params.tournamentId}`,
  );
  const players = await res.json();
  return players as {
    count: number;
    items: {
      id?: string;
      name: string;
    }[];
  };
});

export const useCreateTournament = routeAction$(async (input, requestEvent) => {
  const response = await fetch(
    `http://localhost:4006/api/games/tournaments/${requestEvent.params.tournamentId}`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        scores: input.scores.map((score) => ({
          playerId: score.playerId,
          gamePoints: score.gamePoints,
        })),
      }),
    },
  );
  const body = await response.json();
  return body as { id: string };
}, zod$(formSchema));

export default component$(() => {
  const action = useCreateTournament();
  const nav = useNavigate();
  const loc = useLocation();
  const players = usePlayersData().value.items.map((player) => ({
    value: player.id,
    label: player.name,
  }));
  if (action.value?.id) {
    nav(`/tournaments/${loc.params.tournamentId}`);
  }

  return (
    <>
      <h1 class="text-xl">Create game</h1>
      <Form action={action} class="flex flex-col">
        <SelectInput
          label="Player 1"
          id="scores.0.playerId"
          options={players}
        />
        <BasicInput text="Points" id="scores.0.gamePoints" type="number" />
        <SelectInput
          label="Player 2"
          id="scores.1.playerId"
          options={players}
        />
        <BasicInput text="Points" id="scores.1.gamePoints" type="number" />
        <div class="place-self-end">
          <Button text="Submit" type="submit" />
        </div>
      </Form>

      {action.value && !action.value.failed && (
        <p>{`Game ${action.value.id} created successfully`}</p>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Create game',
};
