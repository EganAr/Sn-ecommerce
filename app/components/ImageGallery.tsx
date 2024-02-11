"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanaty";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleImage = (images: any) => {
    setBigImage(images);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, id: any) => (
          <div key={id} className="overflow-hidden rounded-lg">
            <Image
              src={urlFor(image).url()}
              alt=""
              width={800}
              height={800}
              className="w-full h-full object-cover object-center cursor-pointer transition duration-200 hover:opacity-90"
              onClick={() => handleImage(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
