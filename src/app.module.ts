import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MovieModule } from './movies/movie.module'

@Module({
  imports: [MovieModule, MongooseModule.forRoot('mongodb+srv://admin:RpxUo3o4rwCdxmyx@cluster0-ldcwb.mongodb.net/test?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
