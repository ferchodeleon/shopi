import { TrashIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, removeProduct } = props;

  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt="Images of the product"
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <TrashIcon
          className="h-5 w-5 text-black cursor-pointer"
          onClick={() => removeProduct(id)}
        />
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default OrderCard;
