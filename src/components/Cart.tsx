import type { CartProduct } from "../type/CartItem";
import CartItem from "./CartItem";

const Cart = ({
  items,
  onRemoveFromCart,
}: {
  items: CartProduct[];
  onRemoveFromCart: (id: number) => void;
}) => {
  return (
    <>
      <h2 className="text-black text-2xl font-bold mt-2 mb-10  dark:text-white">
        Cart
      </h2>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item.product.id}>
            <CartItem {...item} onRemoveFromCart={onRemoveFromCart} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
