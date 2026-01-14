import { Assignment } from "./entities/assignment.entity";

export const assignmentProviders = [
  {
    provide: 'ASSIGNMENT_REPOSITORY',
    useValue: Assignment,
  },
];