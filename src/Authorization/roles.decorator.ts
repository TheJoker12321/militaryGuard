
import { SetMetadata } from '@nestjs/common';
import { Role } from './roles.enum';
import 'dotenv/config'

export const Roles = (...roles: Role[]) => SetMetadata(process.env.ROLES_KEY, roles);



