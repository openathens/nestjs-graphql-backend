import { PeopleResolver } from './people.resolver';
import { Module } from '@nestjs/common';

@Module({
    providers: [PeopleResolver],
    exports: [PeopleResolver],
})
export class PeopleModule { }
