const mongoose = require('mongoose');


const url =process.env.MONGODB_URI

mongoose.connect(url);

const messageSchema = new mongoose.Schema({
  message: String,
});
const Message = mongoose.model('Message', messageSchema);
  const message = new Message({
    message: 'hello',
  });
  message.save().then(() => {
    console.log(`added new message`);
    mongoose.connection.close();
  });
