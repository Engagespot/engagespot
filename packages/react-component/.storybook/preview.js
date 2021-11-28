import { EngagespotProvider } from '../src/components/engagespotProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'white', value: 'white' },
      { name: 'light', value: '#e6e6e6' },
      { name: 'dark', value: '#282c34' },
    ],
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        {context.kind.startsWith('examples/') ? (
          <Story />
        ) : (
          <EngagespotProvider
            state={{
              panelVisibility: null,
              togglePanelVisibility: null,
              scroll: null,
            }}
          >
            <Story />
          </EngagespotProvider>
        )}
      </div>
    );
  },
];
