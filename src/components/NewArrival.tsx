import type { Product } from "../type/Product";
import Card from "./Card";

const NewArrival = ({
  items,
  onClick,
}: {
  items: Product[];
  onClick: (item: Product) => void;
}) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold  dark:text-white">
          NEW ARRIVALS
        </div>
      </div>
      <div className="justify-between mt-10 grid grid-cols-1 gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
