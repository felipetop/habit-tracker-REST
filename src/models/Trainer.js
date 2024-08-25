import mongoose from 'mongoose';
const { Schema } = mongoose;

const trainerMonsterSchema = new Schema({
  trainer: { type: Schema.Types.ObjectId, ref: 'Trainer' },
  monster: { type: Schema.Types.ObjectId, ref: 'Monster' },
  captureDate: { type: Date, default: Date.now },
  level: { type: Number, default: 1 } 
});

const TrainerMonster = mongoose.model('TrainerMonster', trainerMonsterSchema);
