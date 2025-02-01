import { TrashIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props;

  return (
    <div className="flex flex-col justify-between items-center mb-3 border border-black">
      <span>Date: {date}</span>
      <span>{totalProducts}</span>
      <span>{totalPrice}</span>
    </div>
  );
};

OrdersCard.propTypes = {
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};

export default OrdersCard;
