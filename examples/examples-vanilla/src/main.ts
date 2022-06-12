import { render } from '@engagespot/client';

render('#app', {
  apiKey: '3tw99j2oeeggfuk5uoow7l',
  userId: 'anand',
  headerText: 'Notification Center',
  endPointOverride: 'https://api.staging.engagespot.co/v3/',
  enableNonHttpsWebPush: true,
});
