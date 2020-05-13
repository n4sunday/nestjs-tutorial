import { Sequelize } from 'sequelize-typescript'
import { Cost } from '../cost/models/cost.model'

export const DatabaseProvider = [
    {
        provide: 'db',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: process.env.DATABASE_HOST,
                port: 3306,
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
            })
            sequelize.addModels([
                Cost
            ])
            await sequelize.sync();
            return sequelize;
        }
    }
]