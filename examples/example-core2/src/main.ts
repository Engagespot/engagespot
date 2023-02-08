import './style.css';
import typescriptLogo from './typescript.svg';
import { createInstance, Notification } from '@engagespot/core2';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button">Enable Notifications</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

type CustomData = {
  type: string;
  url: string;
};

async function main() {
  const engagespot = await createInstance<CustomData>({
    apiKey: '14b90lje36icbm6of8f64a',
    userId: 'hemanditwiz@gmail.com',
    debug: true,
    allowNonHttpsWebPush: true,
    transformNotification({ notification, helpers }) {
      return {
        ...notification,
        createdAt: helpers.fromNow(notification.createdAt),
        hello: 'world',
      };
    },
  });

  if (!engagespot) return;
  console.log(engagespot);

  const notifications = await engagespot.notification.get({
    page: 1,
    limit: 10,
  });

  console.log('notifications', notifications);
  const prefs = await engagespot.preference.getPreferences();
  const cats = await engagespot.preference.getCategories();
  engagespot.events.on('webpushPermissionChange', status => {
    console.log('webpushPermissionChange', status);
  });
  console.log('prefs', prefs, cats);

  const button = document.querySelector<HTMLButtonElement>('#counter')!;
  button.addEventListener('click', _ => {
    console.log('clicked');
    engagespot.webpush.subscribe();
  });
}

main();
