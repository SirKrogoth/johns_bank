import app from "./app";
import database from 'ms-commons/data/database';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

(async () => {
    try {
        const port = parseInt(`${process.env.PORT}`);      
        
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

        await database.sync();
        console.log(`Database is running in ${process.env.DB_NAME}....`);

        await app.listen(port, () => {
            console.log(`Running on port ${port}`);
        });
    } catch (error) {
        console.error(`Cannot connect to database. Message: ${error}`);
    }
})();