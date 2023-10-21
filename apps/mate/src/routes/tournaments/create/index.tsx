import { component$ } from '@builder.io/qwik';
import {
  DocumentHead,
  Form,
  routeAction$,
  useNavigate,
  z,
  zod$,
} from '@builder.io/qwik-city';

export const useCreateTournament = routeAction$(
  async (input) => {
    const response = await fetch('http://localhost:4006/api/tournaments', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: input.name,
        pointsOnWin: Number(input.pointsOnWin),
        pointsOnTie: Number(input.pointsOnTie),
        pointsOnLoss: Number(input.pointsOnLoss),
      }),
    });
    const body = await response.json();
    return body as { name: string; id: string };
  },
  zod$({
    name: z.string(),
    pointsOnWin: z.string(),
    pointsOnTie: z.string(),
    pointsOnLoss: z.string(),
  })
);

export default component$(() => {
  const nav = useNavigate();
  const action = useCreateTournament();

  if (action.value?.name) {
    nav(`/tournaments/${action.value.id}`);
  }

  return (
    <>
      <Form action={action}>
        <input name="name" type="text" />
        {action.value?.failed && <p>{action.value.fieldErrors?.name}</p>}
        <input name="pointsOnWin" type="number" />
        {action.value?.failed && <p>{action.value.fieldErrors?.pointsOnWin}</p>}
        <input name="pointsOnTie" type="number" />
        {action.value?.failed && <p>{action.value.fieldErrors?.pointsOnTie}</p>}
        <input name="pointsOnLoss" type="number" />
        {action.value?.failed && (
          <p>{action.value.fieldErrors?.pointsOnLoss}</p>
        )}

        <button type="submit">Submit</button>
      </Form>

      {action.value && !action.value.failed && (
        <p>{`Tournament ${action.value.name} created successfully`}</p>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Create tournament',
};
