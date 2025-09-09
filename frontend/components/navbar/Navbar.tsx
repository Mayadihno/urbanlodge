"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navlink, navlinks } from "@/utils/data";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Properties",
      dropdown: [
        { name: "For Rent", href: "/rent" },
        { name: "For Sale", href: "/sale" },
        { name: "Mortgage Plans", href: "/mortgage" },
      ],
    },
    {
      name: "Agents",
      dropdown: [
        { name: "Find Agents", href: "/agents" },
        { name: "Become an Agent", href: "/join-agent" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        {/* left links*/}
        <div className="">
          <ul className="hidden md:flex gap-5 items-center">
            {navlink.map((link, i) =>
              link.dropdown ? (
                <li key={i} className="relative group">
                  <button className="flex items-center gap-1 text-gray-700 hover:cursor-pointer hover:text-primary hover:fw-bolder hover:text-xl">
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 min-w-[250px]`}
                  >
                    {link.dropdown.map((drop: Dropdown) => (
                      <Link
                        key={drop.name}
                        href={drop.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={i}>
                  <Link
                    href={link.href!}
                    className="text-gray-700 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* logo */}
        <div className="">
          <Link href="/" className="text-2xl font-bold text-primary">
            UrbanLodge
          </Link>
        </div>

        {/* right links */}
        <div className="">
          <ul className="hidden md:flex gap-5 items-center">
            {navlinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href!}
                  className="text-gray-700 hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Button className="bg-primary px-6 py-2 cursor-pointer rounded-[10px] hover:bg-black text-white">
              Sign in
            </Button>
          </ul>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-6 mt-6">
                {navLinks.map((link, i) =>
                  link.dropdown ? (
                    <div key={i}>
                      <p className="font-semibold mb-2">{link.name}</p>
                      <ul className="ml-4 space-y-2">
                        {link.dropdown.map((drop, j) => (
                          <li key={j}>
                            <Link
                              href={drop.href}
                              className="text-gray-700 hover:text-primary"
                            >
                              {drop.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      key={i}
                      href={link.href!}
                      className="text-gray-700 hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <div className="flex gap-4">
                  <Link
                    href="/login"
                    className="text-gray-600 hover:text-primary"
                  >
                    Login
                  </Link>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary-light text-white"
                  >
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
