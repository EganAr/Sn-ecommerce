"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckout(e: any) {
    e.preventDefault();

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold flex gap-4 text-white">
            Shopping Cart <ShoppingBag />
          </SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-hidden">
            <ul className="-my-6 ">
              {cartCount === 0 ? (
                <h1 className="text-center text-white font-bold text-2xl pt-8 ">
                  Your cart is empty
                </h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={entry.image as string}
                          alt=""
                          width={500}
                          height={500}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-white">
                            <h1>{entry.name}</h1>
                            <p>${entry.price}</p>
                          </div>
                          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-white font-bold">
                            QTY: {entry.quantity}
                          </p>
                          <div className="flex">
                            <button
                              className="font-medium text-primary hover:text-primary/80"
                              onClick={() => removeItem(entry.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between text-base font-medium text-white">
              <p>Subtotal :</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="mt-6">
              <Button className="w-full hover:text-black transition-all duration-300" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>

            <div className="flex justify-center mt-6">
              <button
                className="text-white font-semibold hover:opacity-80 transition-all duration-300 text-sm"
                onClick={() => handleCartClick()}
              >
                <span className="text-gray-500">or</span> continue shopping
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
