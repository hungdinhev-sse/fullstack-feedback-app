import { Router } from "express";
import { getHealth } from "../controllers/health.controller";

// This router maps the health endpoint to its controller.
// Route files should stay thin and delegate logic to controllers.

const router = Router();

router.get("/health", getHealth);

export default router;