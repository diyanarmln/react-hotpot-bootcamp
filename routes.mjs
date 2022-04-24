import { resolve } from 'path';
import db from './models/index.mjs';

import initBillsController from './controllers/bills.mjs';

export default function routes(app) {
  const billsController = initBillsController(db);

  // app.get('bill/:id/new', billsController.show);

  // Root route renders Webpack-generated main.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
