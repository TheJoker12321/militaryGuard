import { Shift } from "./entities/shift.entity";

export const shiftProviders = [
  {
    provide: 'SHIFT_REPOSITORY',
    useValue: Shift,
  },
];