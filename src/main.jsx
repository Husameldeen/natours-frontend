import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { TanStackDevtools } from "@tanstack/react-devtools";
// import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
// import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <TanStackDevtools
      plugins={[
        {
          name: "TanStack Query",
          render: <ReactQueryDevtoolsPanel />,
        },
        {
          name: "TanStack Router",
          render: <TanStackRouterDevtoolsPanel />,
        },
      ]}
    /> */}
  </StrictMode>,
);
