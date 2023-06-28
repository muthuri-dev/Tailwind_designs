"use client";
import React from "react";
import {
  BsYoutube,
  BsMicFill,
  BsBell,
  BsCameraVideo,
  BsPerson,
} from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  const [search, setSearch] = React.useState<string>("");
  return (
    <div className="p-4 flex justify-between">
      <div className="flex items-center gap-6">
        <HiOutlineMenu size={26} />
        <div className="flex items-center gap-1">
          <BsYoutube size={30} className="text-red-700" />
          <span className="text-base">YouTube</span>
        </div>
      </div>
      <div className="hidden md:flex min-w-[300px] lg:min-w-[620px] gap-2">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search"
            className="hidden w-full md:flex p-2 bg-transparent border-[1px] border-zinc-700 placeholder:text-zinc-500 focus:outline-none rounded-tl-full rounded-bl-full focus:ring-zinc-500"
            value={search}
            onChange={event=>setSearch(event.target.value)}
          />
          <div className="bg-zinc-700 cursor-pointer rounded-tr-full rounded-br-full pr-4 flex pl-3 items-center">
            <BiSearch size={30} className="text-white" />
          </div>
        </div>
        <div className="flex items-center rounded-full p-2 hover:bg-zinc-950 cursor-pointer">
          <BsMicFill size={20} />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex items-center rounded-full p-2 hover:bg-zinc-950 cursor-pointer">
          <BsCameraVideo size={20} />
        </div>
        <div className="flex items-center rounded-full p-2 hover:bg-zinc-950 cursor-pointer">
          <BsBell size={20} />
        </div>
        <div className="cursor-pointer">
          <BsPerson size={25} />
        </div>
      </div>
    </div>
  );
}
