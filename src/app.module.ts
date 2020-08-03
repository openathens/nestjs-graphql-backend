import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MessagesModule } from './messages/messages.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      definitions: {
        path: join(process.cwd(), '/src/generated/graphql.schema.d.ts'),
        outputAs: 'class',
      },
      playground: true,
      introspection: true,
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    }),
    MessagesModule,
    PeopleModule,
  ],
})
export class AppModule { }