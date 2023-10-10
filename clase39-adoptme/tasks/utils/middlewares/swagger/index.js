const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const taskSchema = {
  type: "object",
  properties: {
    id: { type: "integer", description: "ID único de la tarea" },
    title: { type: "string", description: "Titulo de la tarea" },
    description: { type: "string", description: "Descripción de la tarea" }
  }
}

const options = {
  swaggerDefinition: {
    info: {
      title: 'Tareas API',
      version: '1.0.0',
      description: 'API para administrar tareas V2',
    },
  },
  apis: ['index.js'],
  components: {
    schemas: {
      Tasks: {
        type: "object",
        properties: {
          id: { type: "integer", description: "ID único de la tarea" },
          title: { type: "string", description: "Titulo de la tarea" },
          description: { type: "string", description: "Descripción de la tarea" }
        }
      }
    }
  }
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };