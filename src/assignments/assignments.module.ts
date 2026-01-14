import { Module } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AssignmentsController } from './assignments.controller';
import { DatabaseModule } from 'src/DB/database.module';
import { assignmentProviders } from './assignments.provider';

@Module({
  exports:[AssignmentsService], 
  imports: [DatabaseModule],
  controllers: [AssignmentsController],
  providers: [AssignmentsService, ...assignmentProviders],
})
export class AssignmentsModule {}
