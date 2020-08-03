import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class PeopleResolver {
  // this is just for demonstration purposes
  // do NOT do this in real-life
  // this is meant as a substitute for a database
  peopleThatReallyShouldBeInADb = [
    { id: 0, name: 'Jose', age: 33 },
  ];

  @Query()
  people() {
    return this.peopleThatReallyShouldBeInADb;
  }

  @Mutation()
  async createPerson(@Args('name') name: string, @Args('age') age: number) {
    const id = this.peopleThatReallyShouldBeInADb.length;
    const newPerson = { id, name, age };
    this.peopleThatReallyShouldBeInADb.push(newPerson);
    return newPerson;
  }
}
