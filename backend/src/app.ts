import cors from "cors";
import express from "express";
import healthRouter from "./routes/health.routes";

// This file creates the Express application instance.
// We register shared middleware here and mount route modules.
// Keeping app setup separate from server startup makes the structure cleaner.

const app = express();

app.use(cors());
app.use(express.json());

// Mount health routes under the root path for now.
// Later modules will mount feature routes such as /feedback.
app.use("/", healthRouter);

export default app;