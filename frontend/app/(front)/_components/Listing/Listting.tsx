import { Button } from "@/components/ui/button";
import { browse } from "@/utils/data";
import { formatNumber } from "@/utils/formatter";
import { ICONS } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Listting = () => {
  return (
    <div className="container my-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          Your partner in building generational wealth via real estate
        </h2>
        <p className="text-base text-gray-600 max-w-3xl mx-auto">
          We guide you through the entire journey, from search to inspection, to
          secure a purchase. We are not just a property platform; we are your
          trusted real estate advisor and partner
        </p>
      </div>
      <div className="border border-gray-300 w-[80%] mt-8 mx-auto rounded-md shadow-md bg-neutral-light p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ICONS.home size={40} className="mr-6 text-gray-500" />
            <div className="">
              <h3 className="text-2xl font-[800]">
                Selling? Compare local listing agents for free
              </h3>
              <h6 className="block text-base text-gray-600">
                Find a trusted expert, no obligations.
              </h6>
            </div>
          </div>
          <Button className="bg-black px-6 py-2 cursor-pointer rounded-[10px] hover:bg-primary text-white">
            Start now
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold pb-3">Browse homes in Lekki, Lagos</h3>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          {browse.map((item) => {
            return (
              <Link href={item.href} key={item.id} className="relative">
                <div className="w-full h-48 relative rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    priority
                    fill
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="absolute text-lg top-2 left-2 text-white font-bold">
                  {item.title}
                </div>
                <div className="absolute top-2 right-2 bg-black text-white px-3 py-1 rounded-full text-sm">
                  {formatNumber(item.badge)}+
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Listting;
