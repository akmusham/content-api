const eventEmitter = require('events');
const mongoose = require('mongoose');

global.connectedEmitter = new eventEmitter()
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
global.db = mongoose.createConnection(`mongodb+srv://akhil:UMQt3M9PcFEHNWKh@cluster0-vp4jb.mongodb.net/contentApp`,{ useNewUrlParser: true, useUnifiedTopology: true })
db.on('connected', () => {
  console.log('--------------Connected to DB----------------')
  connectedEmitter.emit('connectedMongoDB')
});

db.on('error', function(err) {
  console.error('Mongoose connection error: ' + err)
})
// When the connection is disconnected
db.on('disconnected', function() {
  console.error('Mongoose connection disconnected')
})
