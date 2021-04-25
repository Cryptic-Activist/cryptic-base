import mongoose from 'mongoose';
import { IChatMessage } from '../../../interfaces/models/mongoDB';

const ChatMessageSchema = new mongoose.Schema({
  chat_id: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  deleted: {
    is_deleted: {
      type: Boolean,
      required: false,
      default: false,
    },
    when_deleted: {
      type: Date,
      required: false,
      default: null,
    },
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    required: false,
    default: null,
  },
});

const ChatMessage = mongoose.model<IChatMessage>(
  'ChatMessage',
  ChatMessageSchema,
);

export default ChatMessage;
