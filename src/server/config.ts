export const config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_DATABASE: process.env.DB_DATABASE || 'catastrodb',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || '12345',
    DB_PORT: parseInt(process.env.DB_PORT, 10) || 5432,
    DB_SCHEMA: 'app',
}
