import Engagespot from '@engagespot/core';

const engagespot = new Engagespot('ujtmjxnp5efmfn5ddsbdj', {
  userId: 'anandrmedia@gmail.com',
  debug: true,
  endPointOverride: 'https://api.staging.engagespot.co/v3/',
});

window.Engagespot = engagespot;
