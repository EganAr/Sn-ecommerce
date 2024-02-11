import Image from "next/image";
import { client, urlFor } from "../lib/sanaty";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImages'] [0]";

  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-beetween md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:mb-8 md:text-5xl">
            Top Fashion for a Top Price
          </h1>
          <p className="max-w-md loading-relaxed text-gray-400 text-justify xl:text-lg">
            Explore the latest trends in fashion at Sn`ecommerce. Shop our
            curated collection of top-quality products
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 lg:mt-4">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-20 md:top-20 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="ss"
              width={1080}
              height={1000}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="ss"
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-beetwen gap-8 md:flex-row">
        <div className="flex h-12 w-72 divide-x overflow-hidden rounded-lg ">
          <Link
            href={"/Men"}
            className="flex items-center justify-center w-1/3 text-white transition duration-500 hover:text-primary active:text-primary-600"
          >
            Men
          </Link>
          <Link
            href={"/Women"}
            className="flex items-center justify-center w-1/3 text-white transition duration-500 hover:text-primary active:text-primary-600"
          >
            Women
          </Link>
          <Link
            href={"/Teens"}
            className="flex items-center justify-center w-1/3 text-white transition duration-500 hover:text-primary active:text-primary-600"
          >
            Teens
          </Link>
        </div>
      </div>
    </section>
  );
}
