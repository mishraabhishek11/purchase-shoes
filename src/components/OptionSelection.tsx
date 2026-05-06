import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

const OptionSelection = ({
  title,
  options,
  className,
  value,
  onChange,
}: {
  title: string;
  options: number[];
  className?: string;
  value?: number;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="relative dark:text-black">
      <select
        value={value ?? 0}
        className={twMerge(
          `w-24 appearance-none border border-gray-300 bg-white p-4 ${className}`,
        )}
        onChange={(e) => onChange(e.target.value)}
      >
        <option key={""} value={""} disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center mr-4">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default OptionSelection;
