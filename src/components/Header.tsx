import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../assets/nike-logo.svg?react";
import { useState } from "react";

const ROUTES: { id: number; title: string }[] = [
  { id: 0, title: "Home" },
  { id: 1, title: "About" },
  { id: 2, title: "Services" },
  { id: 3, title: "Pricing" },
  { id: 4, title: "Contact" },
];

const Header = ({ onCartClick }: { onCartClick: () => void }) => {
  const [isMobileMenuAppear, setIsMobileMenuAppear] = useState(false);

  return (
    <nav className="relative z-10 flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="size-20 dark:fill-white" />
      </a>
      <button
        onClick={() => {
          setIsMobileMenuAppear((prev) => !prev);
        }}
        className="lg:hidden p-2 focus:ring-2 focus:ring-gray-300 rounded-md hover:bg-gray-200  dark:text-gray-400 dark:hover:bg-gray-700 "
      >
        <RxHamburgerMenu size={30} />
      </button>

      <div
        className={`${isMobileMenuAppear ? "block" : "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="bg-gray-100 lg:bg-transparent p-4 rounded-lg border border-gray-100 lg:border-none text-xl flex flex-col lg:flex-row lg:space-x-8  lg:dark:text-white">
          {ROUTES.map((item) => {
            return (
              <li
                key={item.id}
                className={`cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:text-blue-500 ${item.id === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500 " : "hover:bg-gray-50"} ${(item.id == 3 || item.id == 4) && "lg:text-white"}`}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        onClick={onCartClick}
        className="bottom-4 left-4 fixed lg:static lg:mr-8"
      >
        <div className="cursor-pointer flex-center size-12 rounded-full shadow-md bg-white ">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Header;
