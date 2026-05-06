import { useState } from "react";
import { QTY, SIZES } from "../Constant";
import type { CartProduct } from "../type/CartItem";
import type { Product } from "../type/Product";
import OptionSelection from "./OptionSelection";

const ProductDetail = ({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (item: CartProduct) => void;
}) => {
  const [inputs, setInputs] = useState<{
    size: number;
    qty: number;
  }>({ size: 42, qty: 1 });

  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white ">
      <div className="flex-1 lg:-mt-20 lg:ml-28">
        <div className="h-full flex-center bg-linear-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={product.src} className="animate-float" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-black text-6xl lg:text-9xl dark:text-white ">
          {product.title}
        </div>
        <div className="text-gray-800 font-medium text-lg md:text-xl">
          {product.description}
        </div>
        <div className="flex space-x-6">
          <div className="font-bold text-3xl lg:text-6xl">{product.price}$</div>
          <OptionSelection
            onChange={(qty) =>
              setInputs((prev) => {
                return { ...prev, qty };
              })
            }
            title="QTY"
            value={inputs.qty}
            options={QTY}
          />
          <OptionSelection
            onChange={(size) =>
              setInputs((prev) => {
                return { ...prev, size };
              })
            }
            title="SIZE"
            value={inputs.size}
            options={SIZES}
          />
        </div>
        <div className="space-x-4">
          <button
            onClick={() => {
              return onAddToCart({
                product,
                qty: inputs.qty,
                size: inputs.size,
              });
            }}
            className="px-4 py-2 bg-black text-white hover:bg-gray-800 active:bg-gray-600  dark:bg-white  dark:text-black"
          >
            Add to cart
          </button>
          <a
            href="#"
            className="font-medium underline underline-offset-4 text-black"
          >
            {"Show Details"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
