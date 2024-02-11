"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b border-primary bg-black">
      <div className="flex items-center justify-between mx-auto maw-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href={"/"} className="flex items-center justify-center">
          <h1 className="sm:text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Sn`
            <span className="text-white">
              ecom<span className="text-primary">merce</span>
            </span>
          </h1>
        </Link>

        <nav className="hidden gap-8 lg:flex 2xl:ml-16 ">
          {links.map((link, id) => (
            <div key={id}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-primary text-lg font-semibold"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-white text-lg font-semibold transition duration-200 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x">
          <Button
            variant={"ghost"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none text-white hover:text-primary "
          >
            <ShoppingBag />
            <span className="hidden text-sm font-semibold sm:block">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
