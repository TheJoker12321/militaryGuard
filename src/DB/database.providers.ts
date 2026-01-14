import { Sequelize } from 'sequelize-typescript';
import { Assignment } from 'src/assignments/entities/assignment.entity';
import { Shift } from 'src/shifts/entities/shift.entity';
import { User } from 'src/users/entities/user.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'nest',
      });
      sequelize.addModels([User, Shift, Assignment]);
      await sequelize.sync();
      return sequelize;
    },
  },
];