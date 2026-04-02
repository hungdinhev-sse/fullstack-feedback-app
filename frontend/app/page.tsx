import { getBackendHealth } from "@/lib/api";

// This homepage is a simple integration check for Module 0.
// It calls the backend health endpoint and renders the result.
// Later, this frontend shell will be expanded with real product pages.

export default async function HomePage() {
  const health = await getBackendHealth();

  return (
    <main>
      <h1>Feedback Management App</h1>
      <p>Module 0: Frontend ↔ Backend connectivity check</p>

      <section
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          maxWidth: "600px",
        }}
      >
        <h2>Backend Health</h2>
        <p>
          <strong>Status:</strong> {health.status}
        </p>
        <p>
          <strong>Service:</strong> {health.service}
        </p>
        <p>
          <strong>Message:</strong> {health.message}
        </p>
      </section>
    </main>
  );
}