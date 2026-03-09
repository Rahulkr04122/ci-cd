const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", apiRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend is running!",
    timestamp: new Date().toISOString(),
  });
});
// Homepage route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>DevOps Project API</title>
        <style>
          body { font-family: Arial, sans-serif; background: #1a1a2e; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .container { text-align: center; padding: 40px; background: #16213e; border-radius: 15px; border: 1px solid #0f3460; }
          h1 { color: #e94560; font-size: 36px; }
          p { color: #888; font-size: 16px; }
          .badge { background: #e94560; color: white; padding: 5px 15px; border-radius: 20px; font-size: 14px; }
          .endpoints { text-align: left; margin-top: 20px; }
          .endpoint { background: #0f3460; padding: 10px 15px; border-radius: 8px; margin: 8px 0; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 DevOps Project API</h1>
          <p><span class="badge">Live</span></p>
          <p>React + Node.js + Docker + CI/CD</p>
          <div class="endpoints">
            <p style="color:#e94560">Available Endpoints:</p>
            <div class="endpoint">GET /health</div>
            <div class="endpoint">GET /api/items</div>
            <div class="endpoint">POST /api/items</div>
            <div class="endpoint">PUT /api/items/:id</div>
            <div class="endpoint">DELETE /api/items/:id</div>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});

module.exports = app;