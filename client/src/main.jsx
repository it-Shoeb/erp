import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router";
import store from "./state/store.js";
import { Provider } from "react-redux";
import { publicRoute, privateRoute } from "./routes.jsx";

const router = createBrowserRouter([...publicRoute, ...privateRoute]);

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
