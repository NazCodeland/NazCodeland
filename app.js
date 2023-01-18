/* eslint-disable import/extensions */
import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { engine } from 'express-handlebars';

import homePageRoutes from './src/routes/homePageRoute.js';

const app = express();

// -----------------------------------------------------
// template engine settings
// -----------------------------------------------------

app.engine('.hbs', engine({ extname: '.hbs', helpers: {} }));
app.set('view engine', '.hbs');
app.set('views', 'src/views');

// -----------------------------------------------------
// express middleware
// -----------------------------------------------------

app.use(express.static('src/public', { extensions: ['.js'] }));
// app.use(express.json());
// app.use(express.urlencoded());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`App URL: http://www.localhost:3000`);
});

app.use(homePageRoutes);
