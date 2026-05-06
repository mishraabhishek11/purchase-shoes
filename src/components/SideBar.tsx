import type { PropsWithChildren } from "react";

const SideBar = ({
  isOpen,
  children,
  onClose,
}: PropsWithChildren & { isOpen: boolean; onClose: () => void }) => {
  return (
    <>
      <div
        className={`dark:bg-black  p-5 h-full w-full md:w-[50%] lg:w-[35%] bg-white fixed top-0 right-0 z-50 transform transition duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-4 cursor-pointer text-black font-extrabold dark:text-white"
        >
          X
        </button>
        <div>{children}</div>
      </div>
      {isOpen ? (
        <div className="left-0 top-0 fixed h-full w-full bg-black opacity-50" />
      ) : null}
    </>
  );
};

export default SideBar;
