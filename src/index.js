import 'babel-polyfill'; // eslint-disable-line import/no-extraneous-dependencies

import app from './app';

const PORT = 5000;

(async() => {
  await app.listen(PORT);

  console.log(`GraphQL-Pokemon started on http://localhost:${PORT}/`);
})();
