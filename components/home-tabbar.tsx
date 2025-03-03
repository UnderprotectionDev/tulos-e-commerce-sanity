import { productType } from "@/constants";
import { Repeat } from "lucide-react";

interface HomeTabbarProps {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

export function HomeTabbar({ selectedTab, onTabSelect }: HomeTabbarProps) {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold">
      <div className="flex items-center gap-1.5">
        {productType?.map((item) => (
          <button
            key={item?.title}
            onClick={() => onTabSelect(item?.title)}
            className={`border border-[var(--dark-color)] px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-[var(--dark-color)] hover:text-white hoverEffect ${selectedTab === item?.title && "bg-[var(--dark-color)] text-white"}`}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <button className="border border-darkColor p-2 rounded-full hover:bg-darkColor hover:text-white hoverEffect">
        <Repeat className="w-5 h-5" />
      </button>
    </div>
  );
}
