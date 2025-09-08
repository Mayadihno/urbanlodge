"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className=" w-full py-3 px-[30px] bg-neutral-light">
      <div className="flex justify-between align-center">
        <div className="flex space-x-4 text-lg">
          <h2 className="">urbanlodge@gmail.com</h2>
          <h2 className="">+234 812 345 6789</h2>
        </div>
        <div className="">
          <Button
            className="bg-black px-6 py-2 cursor-pointer rounded-[10px] hover:bg-black text-white"
            onClick={() => router.back()}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
