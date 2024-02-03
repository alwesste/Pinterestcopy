import React from "react";
import App from "./App";

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('Element with id "root" not found in the document');
}
