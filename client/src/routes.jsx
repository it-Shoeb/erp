import App from "./App.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Student from "./pages/Student.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import PrivateRouter from "./utils/PrivateRouter.jsx";

export const privateRoute = [
  {
    path: "/",
    element: (
      //<PrivateRouter>
      <App />
      //</PrivateRouter>
    ),
  },
  {
    path: "/dashboard",
    element: (
      //<PrivateRouter>
      <Dashboard />
      //</PrivateRouter>
    ),
  },
  {
    path: "/student",
    element: (
      //<PrivateRouter>
      <Student />
      //</PrivateRouter>
    ),
  },
  {
    path: "/student/add",
    element: (
      //<PrivateRouter>
      <AddStudent />
      //</PrivateRouter>
    ),
  },
];

export const publicRoute = [
  {
    path: "/signup",
    element: <SignUp />,
  },
];
