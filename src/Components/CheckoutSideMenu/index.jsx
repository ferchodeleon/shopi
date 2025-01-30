import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";
import "./style.css";
import OrderCard from "../OrderCard";
import { totalPrice } from "../utils";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const removeProductFromCart = (id) => {
    context.setCount(context.count - 1);
    context.setCartProducts(
      context.cartProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      }  checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My orders</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()} //TODO: Change this to close the product detail
        >
          <XMarkIcon className="size-6 text-black" />
        </div>
      </div>
      <div className="p-4 overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
            removeProduct={removeProductFromCart}
          />
        ))}
      </div>
      <div className="absolute bottom-10 right-7 text-2xl font-medium">
        Total:{" "}
        <span className="text-xl text-zinc-600">
          ${totalPrice(context.cartProducts)}
        </span>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
