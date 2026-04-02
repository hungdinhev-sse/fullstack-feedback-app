// This file centralizes calls from the frontend app to the backend service.
// Module 0 only needs a health check, but later modules will reuse this layer
// for feedback-related REST API calls.

const BACKEND_BASE_URL = "http://localhost:4000";

export type HealthResponse = {
  status: string;
  service: string;
  message: string;
};

export async function getBackendHealth(): Promise<HealthResponse> {
  const response = await fetch(`${BACKEND_BASE_URL}/health`, {
    // Disable caching here so each request reflects the current backend state.
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch backend health status");
  }

  return response.json();
}