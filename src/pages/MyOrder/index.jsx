import { useContext } from "react";

import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      My Order
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrder;
