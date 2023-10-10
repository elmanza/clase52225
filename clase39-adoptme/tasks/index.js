const express = require('express');
const { specs, swaggerUi } = require("./utils/middlewares/swagger")
const app = express();


// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Datos simulados (en una aplicación real, esto podría ser una base de datos)
let tasks = [{
  id: 30,
  title: "Mi tarea 1",
  description: "Hacerla para el jueves"
}];

/**
 * @swagger
 * paths:
 *  /tasks:
 *    get:
 *      summary: Obtener todas las tareas
 *      responses:
 *        '200':
 *          description: Lista de tareas
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#components/schemas/Tasks'
 *      500: Error en el servidor
 */
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Ruta para crear una nueva tarea
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

/**
 * @swagger
 * paths:
 *  /tasks/{id}:
 *    put:
 *      summary: Actualizar una tarea
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID de la tarea para ser actualizada
 *          schema:
 *            type: integer
 *      responses:
 *        200: 
 *          description: Tarea actualizada
 *        404: 
 *          description: No encontramos la tarea
 */
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  tasks[taskId] = updatedTask;
  res.json(updatedTask);
});

// Ruta para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks.splice(taskId, 1);
  res.sendStatus(204);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});