import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ required: true })
  tag: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: [];
}

export interface IPost {
  tag: string;
  title: string;
  description: [];
}

export const PostSchema = SchemaFactory.createForClass(Post);
