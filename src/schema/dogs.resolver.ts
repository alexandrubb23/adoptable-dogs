import { Resolver, Query, Arg } from 'type-graphql';

import { Dog } from './dogs';
import dogs from './dogs.json';

@Resolver(Dog)
export class DogsResolver {
  @Query(() => [Dog])
  dogs(): Dog[] {
    return dogs;
  }

  @Query(() => Dog, { nullable: true })
  dog(@Arg('name', () => String) name: string): Dog | undefined {
    const dog = dogs.find(dog => dog.name === name);
    if (!dog) {
      throw new Error(`Dog with name ${name} not found`);
    }

    return dog;
  }
}
