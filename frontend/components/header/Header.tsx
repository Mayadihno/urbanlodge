"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ICONS } from "@/utils/icons";

const Header = () => {
  const router = useRouter();
  return (
    <div className=" w-full container-header bg-accent-beige/70 font-ebgaramond">
      <div className="flex justify-between align-center">
        <div className="flex space-x-4 text-base">
          <h2 className="flex items-center">
            <ICONS.mail className="mr-1" /> urbanlodge@gmail.com
          </h2>
          <h2 className="flex items-center">
            <ICONS.call className="mr-1" />
            +234 812 345 6789
          </h2>
        </div>
        <div className="">
          <Button
            className="bg-primary-light px-6 py-2 cursor-pointer rounded-[10px] hover:bg-black text-white"
            onClick={() => router.back()}
          >
            Post Property
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
