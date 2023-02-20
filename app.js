/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { engine } from 'express-handlebars';

// -----------------------------------------------------
// route imports
// -----------------------------------------------------

// -----------------------------------------------------
// middleware imports
// -----------------------------------------------------

import livereload from 'livereload';
import connectLiveReload from 'connect-livereload';
import favicon from 'serve-favicon';
import homePageRoute from './src/routes/homePageRoute.js';
import aboutMeRoute from './src/routes/aboutMeRoute.js';
// import portfolioRoutes from './src/routes/portfolioRoutes.js';
import contactRoute from './src/routes/contactRoute.js';
import blogRoute from './src/routes/blogRoute.js';
// -----------------------------------------------------
// hot module reload for browser
// -----------------------------------------------------
// setting up livereload and connect-livereload modules
// so that the browser refreshes whenever nodemon restarts the server
// on changes to any files within the whole project directory
// https://dev.to/cassiolacerda/automatically-refresh-the-browser-on-node-express-server-changes-x1f680-1k0o#:~:text=Create%20a%20Livereload%20server%20and,refresh(%22%2F%22)%3B%20.
const liveReloadServer = livereload.createServer();

liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 5);
});

// -----------------------------------------------------
// template engine settings
// -----------------------------------------------------
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`App URL: http://www.localhost:3000`);
});

app.engine('.hbs', engine({ extname: '.hbs', helpers: {} }));
app.set('view engine', '.hbs');
app.set('views', 'src/views');

// -----------------------------------------------------
// middleware usage
// -----------------------------------------------------
// for adding the Livereload script to the response.
app.use(connectLiveReload());

app.use(express.static('src/public', { extensions: ['.js'] }));

// for incoming form data
app.use(express.urlencoded({ extended: true }));

app.use(favicon('src/public/images/favicon.png'));

app.use(homePageRoute);
app.use(aboutMeRoute);
// app.use(portfolioRoutes);
app.use(contactRoute);
app.use(blogRoute);
