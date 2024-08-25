import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  description: String,
});

mongoose.model('Monster', categorySchema);