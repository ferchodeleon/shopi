import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";
import "./style.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      }  product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeProductDetail()}
        >
          <XMarkIcon className="size-6 text-black" />
        </div>
      </div>
      <section className="flex flex-col p-6">
        <figure className="my-5">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={
              context.productToShow.images?.[0] ??
              "https://static-00.iconduck.com/assets.00/no-image-icon-512x512-lfoanl0w.png"
            }
            alt="Image of product"
          />
        </figure>
        <p className="font-medium text-2xl my-3">
          ${context.productToShow.price}
        </p>
        <h3 className="font-medium my-2">{context.productToShow.title}</h3>
        <p className="font-light text-sm">
          {context.productToShow.description}
        </p>
        <h4 className="my-4 font-medium text-xs text-zinc-400">
          {context.productToShow.category?.name}
        </h4>
      </section>
    </aside>
  );
};

export default ProductDetail;
