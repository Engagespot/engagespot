//import './style.css';
import { render } from './cdn/engagespot.client.esm.js';

render('#root', {
  apiKey: '3tw99j2oeeggfuk5uoow7l',
  userId: 'anand',
  endPointOverride: 'https://api.staging.engagespot.co/v3/',
  enableNonHttpsWebPush: true,
});

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;
