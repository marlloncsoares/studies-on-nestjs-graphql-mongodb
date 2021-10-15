import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ResolveTypeFactory } from '@nestjs/graphql/dist/schema-builder/factories/resolve-type.factory';
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

  @Mutation((returns) => CatType)
  async updateCat(@Args('id') id: string, @Args('input') input: CatType) {
    return this.catService.update(id, input);
  }

  @Mutation((returns) => CatType)
  async deleteCat(@Args('id') id: string) {
    return this.catService.delete(id);
  }
}
