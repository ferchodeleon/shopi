import { CalendarDaysIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props;

  return (
    <div className="flex w-80 justify-between items-center shadow-2xl mb-3 border border-gray-200 rounded-2xl">
      <div className="flex flex-col justify-around w-2/3 p-3">
        <div className="flex items-center w-full">
          <CalendarDaysIcon className="h-7 w-7 pr-2" />
          <span>Date: {date}</span>
        </div>
        <div className="flex items-center w-full">
          <ShoppingBagIcon className="h-7 w-7 pr-2" />
          <span>Total Products:</span>
          <span className="pl-1">{totalProducts}</span>
        </div>
      </div>
      <div className="flex items-center justify-around w-1/3 p-3 text-wrap font-medium">
        <span>Total:</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};

export default OrdersCard;
