export interface DefaultConfig {
  apiHost: string;
  wssHost: string;
  wssPort: number;
}

const Defaults: DefaultConfig = {
  // apiHost: 'https://api.engagespot.co/v3',
  apiHost: 'https://coreapi-refactored.staging.engagespot.co/v3',
  wssHost: 'wss://rtm.engagespot.co',
  wssPort: 80,
};

export default Defaults;
