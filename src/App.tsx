import { useEffect, useState } from "react";
import Header from "./components/Header";
import NewArrival from "./components/NewArrival";
import ProductDetail from "./components/ProductDetail";
import SideBar from "./components/SideBar";
import { SHOE_LIST } from "./Constant";
import Cart from "./components/Cart";
import type { CartProduct } from "./type/CartItem";
import { BiMoon, BiSun } from "react-icons/bi";

const App = () => {
  const [isSideBarAppear, setIsSideBarAppear] = useState(false);

  const [currentProduct, setCurrentProduct] = useState(SHOE_LIST[0]);

  const [cartItems, setCartItems] = useState([] as CartProduct[]);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  };

  const addToCart = ({ product, qty, size }: CartProduct) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id,
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }

      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (productId: number) => {
    console.log("***", productId);
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId,
    );
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-black">
      <Header onCartClick={() => setIsSideBarAppear(true)} />
      <ProductDetail product={currentProduct} onAddToCart={addToCart} />
      <NewArrival
        items={SHOE_LIST}
        onClick={(item) => setCurrentProduct(item)}
      />
      <SideBar
        isOpen={isSideBarAppear}
        onClose={() => setIsSideBarAppear(false)}
      >
        <Cart items={cartItems} onRemoveFromCart={removeFromCart} />
      </SideBar>

      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-black px-4 py-2 text-white rounded-full dark:bg-white dark:text-black cursor-pointer"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
};

export default App;
