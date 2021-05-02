// bin/migrate.js

const db = require('../database.js');
db.sequelize.sync();
