import { Document } from 'mongoose';

export interface IChatMessage extends Document {
  _id: string;
  chat_id: number;
  user_id: number;
  deleted: {
    is_deleted: boolean;
    when_deleted: null | Date;
  };
  message: string;
  created_at: Date;
  updated_at: null | Date;
  __v: number;
}
