import { useState } from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";

const Card = ({ item }) => {
  const [image, setImage] = useState(item.images[0]);
  const context = useContext(ShoppingCartContext);

  const handleMouseEnter = () => {
    setImage(item.thumbnail);
  };

  const handleMouseLeave = () => {
    setImage(item.images[0]);
  };

  const showProductDetail = (productDetail) => {
    context.setProductToShow(productDetail);
    context.openProductDetail();
    context.closeCheckoutSideMenu();
  };

  const addProductToCart = (event, productItem) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productItem]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-gray-500  w-6 h-6 rounded-full m-2 p-1"
          onClick={() => {
            context.openCheckoutSideMenu();
            context.closeProductDetail();
          }}
        >
          <CheckIcon className="size-6 text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white text-black w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductToCart(event, item)}
        >
          <PlusIcon className="size-6 text-black" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md p-1"
      onClick={() => showProductDetail(item)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <img
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          src={image}
          alt={item.description}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {renderIcon(item.id)}
        <span className="absolute bottom-0 left-0 flex bg-black/60 rounded-lg text-white text-xs m-2 px-3 py-0.5">
          {item.category}
        </span>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light text-wrap">{item.title}</span>
        <span className="text-lg font-medium">${item.price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
