import { useContext, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

const SignIn = () => {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(false);
    // Redirect
    return <Navigate replace to={"/"} />;
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const account = JSON.stringify(data);
    context.setAccount(account);
    localStorage.setItem("account", account);
  };

  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const renderLogin = () => {
    return (
      <div className="my-4 w-sm">
        <div>
          <p className="flex items-start">
            <span className="pr-1">Email:</span>
            <span className="font-medium">{parsedAccount?.email}</span>
          </p>
          <p className="flex">
            <span className="pr-1">Password:</span>
            <span className="font-medium">{parsedAccount?.password}</span>
          </p>
        </div>
        <div className="block w-full mt-4 ">
          <Link to="/">
            <button
              className="bg-black text-white py-2 rounded-md w-full cursor-pointer"
              onClick={() => handleSignIn()}
              disabled={!hasUserAnAccount}
            >
              Log in
            </button>
          </Link>
          <Link to="/">
            <button className="underline decoration-solid py-3 text-xs font-medium w-full cursor-pointer">
              Forgot my password
            </button>
          </Link>
          <button
            className="py-2 w-full border border-black rounded-md cursor-pointer"
            disabled={hasUserAnAccount}
            onClick={() => setView("create-user-info")}
          >
            Sign up
          </button>
        </div>
      </div>
    );
  };

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Peter"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Your email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="hi@helloworld.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Your password:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="******"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none
            py-2 px-4"
          />
        </div>
        <Link to="/">
          <button
            className="bg-black text-white w-full rounded-lg py-3"
            onClick={() => createAnAccount()}
          >
            Create
          </button>
        </Link>
      </form>
    );
  };

  const renderView = () =>
    view === "create-user-info" ? renderCreateUserInfo() : renderLogin();

  return (
    <div>
      <Layout>
        <h2 className="font-bold">Welcome</h2>
        {renderView()}
      </Layout>
    </div>
  );
};

export default SignIn;
