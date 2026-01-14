import { Module } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { ShiftsController } from './shifts.controller';
import { shiftProviders } from './shift.provider';
import { DatabaseModule } from 'src/DB/database.module';

@Module({
  exports: [ShiftsService],
  imports: [DatabaseModule],
  controllers: [ShiftsController],
  providers: [ShiftsService, ...shiftProviders],
})
export class ShiftsModule {}
