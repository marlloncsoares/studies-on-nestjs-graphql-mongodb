import { Resolver, Query } from '@nestjs/graphql';
import { CatService } from './cat.service';
// import { CatType } from './dto/cat.dto';

@Resolver()
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query((returns) => String)
  async hello() {
    return 'Olá mundo';
  }
}
