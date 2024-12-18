import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/*<DevTools />*/}
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
