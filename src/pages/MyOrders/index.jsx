import { useContext } from "react";
import { Link } from "react-router-dom";

import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex justify-center items-center w-80 relative mb-3">
        <h1>MyOrders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link to={`/my-order/${index}`} key={index}>
          <OrdersCard
            key={order.date}
            date={order.date}
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
          />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;
