"use client";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { ModeToggle } from "../ui/theme-button";
import { SearchIcon } from "lucide-react";
import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar";
import { LOGO } from "../Logo";

export default function Header() {
  return (
    <div className="absolute h-16 w-full flex justify-center items-center md:px-20 pr-8 pl-16 sm:pl-20">
      <div className=" sticky flex justify-between w-full max-w-7xl">
        <Link href="/home">
          <LOGO />
        </Link>
        <div className="flex flex-shrink justify-end">
          <div className="flex">
            <Input
              placeholder="Search..."
              className="flex min-w-72 w-[60vh] pl-4 rounded-full rounded-r-none bg-transparent ring-2 ring-neutral-500"
            />
            <div className="flex justify-center items-center rounded-full rounded-l-none ml-1 px-4 ring-2 ring-neutral-500">
              <SearchIcon />
            </div>
          </div>
        </div>
        <Link href="#" className="flex h-10 w-10 rounded-full">
          <div className="flex px-4 rounded-full">
            <ModeToggle />
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
