import './style.css';
import { render } from '../../packages/client/dist/cdn/engagespot-client.esm';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

render('#notification-center', {
  apiKey: '3tw99j2oeeggfuk5uoow7l',
  userId: 'anand',
  headerText: 'Notification Center',
  endPointOverride: 'https://api.staging.engagespot.co/v3/',
  enableNonHttpsWebPush: true,
});
