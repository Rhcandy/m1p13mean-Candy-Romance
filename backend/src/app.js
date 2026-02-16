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
      title: 'API MEAN Stack - Gestion des Utilisateurs',
      version: '1.0.0',
      description: 'API documentation for MEAN Stack application - User Management System',
      contact: {
        name: 'API Support',
        email: 'support@example.com'
      }
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT Token - Obtenez-le via l\'endpoint /api/auth/login'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./src/routes/*.js', './src/controllers/*.js', './src/models/*.js', './src/dto/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Import des routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const typeBoxRoutes = require('./routes/typeBoxRoutes');
const boxRoutes = require('./routes/boxRoutes');
const boutiqueRoutes = require('./routes/boutiqueRoutes');
const loyers =require('./routes/loyer.routes');

// Routes API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/typebox', typeBoxRoutes);
app.use('/api/boxes', boxRoutes);
app.use('/api/boutiques', boutiqueRoutes);
app.use('/api/loyers', loyers);

// Servir les fichiers uploadés statiquement
app.use('/uploads', express.static('uploads'));

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