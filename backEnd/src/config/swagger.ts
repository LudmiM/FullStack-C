import path from "path";
import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Task',
                description: 'API operations related to task'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: "Api Docs for Task"
        }
    },
    apis: [path.resolve(__dirname, './../router/*.ts')], 
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
