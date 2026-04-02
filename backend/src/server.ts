import app from "./app";

// This file is responsible only for starting the HTTP server.
// App creation lives in app.ts, while runtime boot logic lives here.

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});