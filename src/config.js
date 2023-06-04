import 'dotenv/config'

const pgConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
};

export  {
    pgConfig
}
