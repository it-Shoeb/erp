import App from "./App";
import SignUp from "./pages/SignUp.jsx";

export const publicRoute = [
  {
    path: "/",
    element: <App />,
  },
];

export const privateRoute = [
  {
    path: "/signup",
    element: <SignUp />,
  },
];
