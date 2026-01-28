const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connecté"))
 .catch(err => console.log("Erreur MongoDB :", err));

// Configuration Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API MEAN Stack',
      version: '1.0.0',
      description: 'API documentation for MEAN Stack application',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/models/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /
 * get:
 *   summary: API health check
 *   description: Returns a simple message to confirm API is running
 *   responses:
 *     200:
 *       description: API is running successfully
 *       content:
 *         text/plain:
 *           schema:
 *             type: string
 *             example: "API MEAN OK"
 */
app.get("/", (req, res) => {
  res.send("API MEAN OK");
});

app.listen(PORT, () => {
  console.log("Serveur démarré sur le port " + PORT);
  console.log(`Documentation Swagger disponible sur http://localhost:${PORT}/api-docs`);
});