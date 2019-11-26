import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://systemadmin:m4rc3l0@desafiomb-xwfc4.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

console.log('Database connected!');