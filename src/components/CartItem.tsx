import { CiTrash } from "react-icons/ci";
import { QTY, SIZES } from "../Constant";
import type { Product } from "../type/Product";
import OptionSelection from "./OptionSelection";

const CartItem = ({
  product,
  qty,
  size,
  onRemoveFromCart,
}: {
  product: Product;
  qty: number;
  size: number;
  onRemoveFromCart: (id: number) => void;
}) => {
  return (
    <div className="cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:hover:bg-gray-600 dark:bg-gray-800">
      <div className="flex  space-x-2 ">
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        <div className="font-bold dark:text-white">{product.price}$</div>
      </div>
      <div className="flex justify-between pl-32 items-center">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <OptionSelection
              onChange={() => {}}
              title=""
              options={SIZES}
              className="p-1 w-16 pl-2"
              value={size}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <OptionSelection
              onChange={() => {}}
              title=""
              options={QTY}
              className="p-1 w-16 pl-4"
              value={qty}
            />
          </div>
        </div>

        <button onClick={() => onRemoveFromCart(product.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
