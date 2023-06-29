"use client";
import React from "react";
import { HiHome } from "react-icons/hi";
import { TfiYoutube } from "react-icons/tfi";
import { IMenuItem } from "../../types";
import { usePathname, useRouter } from "next/navigation";
import { BsCollection } from "react-icons/bs";

const MenuItems: Array<IMenuItem> = [
  {
    icon: HiHome,
    text: "Home",
    url: "/",
  },
  {
    icon: TfiYoutube,
    text: "Shorts",
    url: "/shorts",
  },
  {
    icon: BsCollection,
    text: "Subscriptions",
    url: "/subscribe",
  },
];

export default function SideView() {
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName);

  const handleItemClick = (item: IMenuItem) => {
    router.push(item.url);
  };
  return (
    <div className="lg:w-[260px] lg:px-3 sticky top-5">
      {MenuItems.map((item) => (
        <div
          className={`flex flex-col lg:flex-row lg:gap-6 gap-1 p-4 lg:py-2 cursor-pointer rounded-xl items-center hover:bg-zinc-800 ${
            item.url === pathName && "bg-zinc-700"
          }`}
          onClick={() => handleItemClick(item)}
        >
          <item.icon size={30} />
          <span className="text-sm lg:text-base">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
