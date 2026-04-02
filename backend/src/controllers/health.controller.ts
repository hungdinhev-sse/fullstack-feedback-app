import { Request, Response } from "express";

// This controller returns a simple health response.
// It is intentionally small because Module 0 is only about
// verifying FE ↔ BE connectivity and clean basic structure.

export function getHealth(_req: Request, res: Response) {
  res.status(200).json({
    status: "ok",
    service: "backend",
    message: "Backend is healthy",
  });
}