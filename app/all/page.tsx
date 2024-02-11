import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanaty";
import Image from "next/image";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == 'product'] {
        _id,
          name,
          price,
          "imageUrl": images[0].asset->url,
          "slug": slug.current,
          "categoryName": category->name
      }`;

  const data = await client.fetch(query);
  return data;
}

export default async function getAllProducts() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <div className="flex-col justify-start items-center gap-4">
          <h1 className="text-white text-2xl font-bold tracking-tight">
            Our Products
          </h1>
          <span className="text-md text-gray-500 text-center font-bold mt-3">
            All
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Suspense fallback={null}>
            {data.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-lg transition duration-500 hover:opacity-90 lg:h-72 hover:cursor-pointer">
                  <Link href={`/product/${product.slug}`}>
                    <Image
                      src={product.imageUrl}
                      alt=""
                      width={300}
                      height={300}
                      className="h-full w-full object-cover object-center"
                    />
                  </Link>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <h2 className="text-md text-white tracking-tight transition duration-500 hover:text-primary">
                    <Link href={`/product/${product.slug}`} className="">
                      {product.name}
                    </Link>
                  </h2>
                  <p className="text-md font-bold text-white">
                    ${product.price}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-500 pt-3">
                  {product.categoryName}
                </p>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
