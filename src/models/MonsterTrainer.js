import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  avatar: String,
});

mongoose.model('Trainer', categorySchema);