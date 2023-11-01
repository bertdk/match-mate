import { component$ } from '@builder.io/qwik';
import {
  DocumentHead,
  Form,
  routeAction$,
  useNavigate,
  z,
  zod$,
} from '@builder.io/qwik-city';
import { BasicInput, Button } from '@components';

const formSchema = {
  name: z.string().min(1).max(255),
  pointsOnWin: z.coerce.number().min(0).max(100),
  pointsOnTie: z.coerce.number().min(0).max(100),
  pointsOnLoss: z.coerce.number().min(0).max(100),
};
export const useCreateTournament = routeAction$(async (input) => {
  const response = await fetch('http://localhost:4006/api/tournaments', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: input.name,
      pointsOnWin: input.pointsOnWin,
      pointsOnTie: input.pointsOnTie,
      pointsOnLoss: input.pointsOnLoss,
    }),
  });
  const body = await response.json();
  return body as { name: string; id: string };
}, zod$(formSchema));

export default component$(() => {
  const nav = useNavigate();
  const action = useCreateTournament();

  if (action.value?.name) {
    nav(`/tournaments/${action.value.id}`);
  }

  return (
    <>
      <Form action={action} class="flex flex-col">
        <BasicInput
          text="Name"
          id="name"
          placeholder="Enter the tournament name"
          type="text"
          error={action.value?.fieldErrors?.name}
          autoFocus
        />
        <div class="flex justify-between">
          <BasicInput
            text="Points for a win"
            id="pointsOnWin"
            type="number"
            error={action.value?.fieldErrors?.pointsOnWin}
          />
          <BasicInput
            text="Points for a tie"
            id="pointsOnTie"
            type="number"
            error={action.value?.fieldErrors?.pointsOnTie}
          />
          <BasicInput
            text="Points for a loss"
            id="pointsOnLoss"
            type="number"
            error={action.value?.fieldErrors?.pointsOnLoss}
          />
        </div>
        <div class="place-self-end">
          <Button text="Submit" type="submit" />
        </div>
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
