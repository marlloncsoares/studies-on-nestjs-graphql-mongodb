import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { CatType } from './dto/cat.dto';

@Resolver()
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query((returns) => [CatType])
  async cats() {
    return this.catService.findAll();
  }

  @Mutation((returns) => CatType)
  async createCat(@Args('input') input: CatType) {
    return this.catService.create(input);
  }
}
