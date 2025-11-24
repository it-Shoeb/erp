import { useSelector, useDispatch } from "react-redux";
import { access } from "../state/authenticate/AuthenticateSlicer";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { authenticate } = useSelector((state) => state);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    if (authenticate.isAuthenticated) {
      dispatch(access());
      console.log("User Logged Out");
    } else {
      console.log("User Logged In");
      navigate("/dashboard", { replace: false });
      dispatch(access());
    }

    console.log(e.target[0].value);
    console.log(e.target[1].value);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200 p-4">
        <form
          action=""
          onSubmit={(e) => handleFormSubmit(e)}
          className="flex flex-col items-center gap-8 sm:w-1/2 md:w-1/2 xl:w-1/3 p-8 bg-white rounded-lg shadow-lg"
        >
          <h1 className="font-bold text-4xl">Login Page</h1>
          <input
            className="w-full p-2 outline-0 border-b-2 focus:bg-gray-200"
            type="email"
            placeholder="Enter Your Email"
            name=""
            id=""
            value={"lorem@test.com"}
            required
            onChange={(e) => {
              handleFormData(e);
            }}
          />
          <input
            className="w-full p-2 outline-0 border-b-2 focus:bg-gray-200"
            type="password"
            placeholder="Enter Your Password"
            name=""
            id=""
            value={"lorem"}
            required
            onChange={() => {
              handleFormData();
            }}
          />
          <input
            className="w-full p-2 outline-0 font-bold bg-gray-200 focus:bg-gray-200 rounded-lg cursor-pointer"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </>
  );
};

export default SignUp;
