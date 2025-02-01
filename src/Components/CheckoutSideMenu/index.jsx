import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";
import "./style.css";
import OrderCard from "../OrderCard";
import { totalPrice } from "../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const removeProductFromCart = (id) => {
    context.setCount(context.count - 1);
    context.setCartProducts(
      context.cartProducts.filter((product) => product.id !== id)
    );
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
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
      <div className="p-4 overflow-y-scroll flex-1">
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
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl text-zinc-600">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-order/last">
          <button
            className="w-full font-medium bg-black p-2 rounded-lg text-white"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
