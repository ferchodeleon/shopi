import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";

const NavBar = () => {
  const activeStyle = "underline underline-offset-3";
  const context = useContext(ShoppingCartContext);

  // Sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

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
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className="text-black-60">{parsedAccount?.email}</li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/my-orders"
            >
              My orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/my-account"
            >
              My account
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/sign-in"
              onClick={() => handleSignOut()}
            >
              Sign Out
            </NavLink>
          </li>
          <li className="flex items-center gap-1">
            <ShoppingBagIcon className="size-6 text-black" />
            <p className="w-1.5"> {context.count} </p>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/sign-in"
              onClick={() => handleSignOut()}
            >
              Sign In
            </NavLink>
          </li>
          <li className="flex items-center gap-1">
            <ShoppingBagIcon className="size-6 text-black" />
            <p className="w-1.5"> {context.count} </p>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to={`${isUserSignOut ? "/sign-in" : "/"}`}
            onClick={() => context.setSearchByCategory()}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
            onClick={() => context.setSearchByCategory()}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/beauty"
            onClick={() => context.setSearchByCategory("beauty")}
          >
            Beauty
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/fragrances"
            onClick={() => context.setSearchByCategory("fragrances")}
          >
            Fragrances
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/furnitures"
            onClick={() => context.setSearchByCategory("furniture")}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/groceries"
            onClick={() => context.setSearchByCategory("groceries")}
          >
            Groceries
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">{renderView()}</ul>
    </nav>
  );
};

export default NavBar;
