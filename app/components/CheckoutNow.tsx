"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanaty";
import { ProductCart } from "./AddToCart";

export default function CheckoutNow({
  name,
  price,
  description,
  image,
  currency,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    price: price,
    description: description,
    image: urlFor(image).url(),
    currency: currency,
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        buyNow(product.price_id);
      }}
      className="bg-white text-black hover:opacity-70"
      variant={"outline"}
    >
      Checkout now
    </Button>
  );
}
