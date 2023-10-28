import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { SelectInput } from './select-input';

test(`[SelectInput Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<SelectInput />);
  expect(screen.innerHTML).toContain('SelectInput works!');
});
