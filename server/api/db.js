const mongoose = require('mongoose');
const stringSchema = require('./models/String');
const { DATABASE } = require('./config');

mongoose.Promise = global.Promise;

mongoose.model('String', stringSchema);

const connect = host => mongoose.connect(`mongodb://${host}/${DATABASE}`);

// close mongoose connection when process ends
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    process.exit(0);
  });
});

module.exports = {
  connect,
};
