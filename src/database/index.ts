import mongoose from 'mongoose';

import area, { IArea } from './models/area/area.schema';
import question, { IQuestion } from './models/question/question.schema';
import option, { IOption } from './models/option/option.schema';

mongoose.connect('mongodb+srv://systemadmin:m4rc3l0@desafiomb-xwfc4.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log('Database connected!'))
.catch(()=>console.log('Err'));

const db = {
  Area: area(mongoose),
  Question: question(mongoose),
  Option: option(mongoose),
};

export default db;