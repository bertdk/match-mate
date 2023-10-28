import {
  HTMLAttributes,
  JSXChildren,
  component$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';
import { TabItem, TabsOptions, Tabs as FlowTabs } from 'flowbite';

interface Props extends HTMLAttributes<HTMLDivElement> {
  tabs: { id: string; label: string; child: JSXChildren }[];
}

export const Tabs = component$((props: Props) => {
  const tabsElement = useSignal<HTMLElement>();
  const tabElements = useSignal<TabItem[]>();
  const inputTabs = props.tabs.map((x) => ({ id: x.id, label: x.label }));

  useVisibleTask$(() => {
    tabElements.value = inputTabs.map((tab) => ({
      id: tab.id,
      triggerEl: document.querySelector(`#${tab.id}-tab`) as HTMLElement,
      targetEl: document.querySelector(`#${tab.id}-target`) as HTMLElement,
    }));
    const options: TabsOptions = {
      defaultTabId: inputTabs[0].id,
      activeClasses: 'text-blue-600 hover:text-blue-600 border-blue-600',
      inactiveClasses:
        'text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300',
    };

    new FlowTabs(tabsElement.value, tabElements.value, options);
  });

  return (
    <>
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px p-0 list-none"
          id="tabs-parent"
          role="tablist"
          ref={tabsElement}
        >
          {props.tabs.map((tab) => (
            <li class="mr-2" role="presentation" key={tab.id}>
              <button
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id={`${tab.id}-tab`}
                type="button"
                role="tab"
                aria-controls={`${tab.id}-target`}
                aria-selected="false"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="tabContentExample">
        {props.tabs.map((tab) => (
          <div
            class="hidden p-4 rounded-lg bg-gray-50"
            id={`${tab.id}-target`}
            key={`${tab.id}-target`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            {tab.child}
          </div>
        ))}
      </div>
    </>
  );
});
