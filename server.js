const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.engine('handlebars', hbs.enging);
app.set('view engine', "handlebars");

app.use(express.json());
app.use(express.urlencoded)({ extended: false });
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});