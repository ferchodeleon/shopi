import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";
import "./style.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      }  checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()} //TODO: Change this to close the product detail
        >
          <XMarkIcon className="size-6 text-black" />
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
