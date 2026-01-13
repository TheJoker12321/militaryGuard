import { Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/DB/database.module';
import { userProviders } from './user.provider';


@Module({
  exports: [UsersService],
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...userProviders]

})
export class UsersModule {}
