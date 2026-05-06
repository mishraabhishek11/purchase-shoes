import type { Product } from "../type/Product";

const Card = ({
  item,
  onClick,
}: {
  item: Product;
  onClick: (item: Product) => void;
}) => {
  return (
    <div
      className={`${item.className} max-w-xl transform cursor-pointer transition hover:scale-105 flex relative`}
      onClick={() => onClick(item)}
    >
      <div className="p-8 flex-1">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img className="absolute h-40 right-2 top-5" src={item.src} />
    </div>
  );
};

export default Card;
