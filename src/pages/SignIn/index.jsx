import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";

const SignIn = () => {
  return (
    <div>
      <Layout>
        <h2 className="font-bold">Welcome</h2>
        <div className="my-4 w-sm">
          <div>
            <p className="flex items-start">
              <span className="pr-1">Email:</span>
              <span className="font-medium">fercho@shopi.com</span>
            </p>
            <p className="flex">
              <span className="pr-1">Password:</span>
              <span className="font-medium">123123</span>
            </p>
          </div>
          <div className="block w-full mt-4 ">
            <Link to="/">
              <button className="bg-black text-white py-2 rounded-md w-full cursor-pointer">
                Log in
              </button>
            </Link>
            <Link to="/">
              <button className="underline decoration-solid py-3 text-xs font-medium w-full cursor-pointer">
                Forgot my password
              </button>
            </Link>
            <button className="py-2 w-full border border-black rounded-md cursor-pointer">
              Sign up
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SignIn;
