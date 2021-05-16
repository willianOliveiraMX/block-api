export const configuration = () => {
    return {
        environment: process.env.NODE_ENV, 
        db_host: process.env.HOST || 'localhost',
        db_port: parseInt(process.env.PORT, 10) || 5432,
        db_username: process.env.USER_NAME || 'postgres',
        db_password: process.env.PASS || '123',
        db_name: process.env.DB_NAME || 'blockData',
    }
}