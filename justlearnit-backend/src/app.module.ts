import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/'), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
