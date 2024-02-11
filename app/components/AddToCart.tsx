"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanaty";

export interface ProductCart {
  name: string;
  price: number;
  description: string;
  image: any;
  currency: string;
  price_id: string;
}

export default function AddToCart({
  name,
  price,
  description,
  image,
  currency,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
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
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}
