import { resolve } from 'path';
import db from './models/index.mjs';

export default function routes(app) {
  // Root route renders Webpack-generated main.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
