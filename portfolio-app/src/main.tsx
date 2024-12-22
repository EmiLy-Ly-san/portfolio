import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import HomePage from "./pages/HomePage.tsx";



const router = createBrowserRouter([
  {
    path: "portfolio/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      }
    ] 
  }
])

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
);