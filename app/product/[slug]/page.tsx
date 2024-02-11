import AddToCart from "@/app/components/AddToCart";
import CheckoutNow from "@/app/components/CheckoutNow";
import ImageGallery from "@/app/components/ImageGallery";
import { DetailProduct } from "@/app/interface";
import { client } from "@/app/lib/sanaty";
import { Button } from "@/components/ui/button";
import {
  Ghost,
  MoonStar,
  Star,
  StarHalfIcon,
  StarIcon,
  StarOff,
  Stars,
  Truck,
} from "lucide-react";

export const dynamic = "force-dynamic";

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == "${slug}"] [0] {
    _id,
      name,
      description,
      price,
      images,
      "slug": slug.current,
      "categoryName": category->name,
      price_id
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: DetailProduct = await getData(params.slug);

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="text-gray-500 text-lg">{data.categoryName}</span>
              <h1 className="text-2xl font-bold text-white mt-2">
                {data.name}
              </h1>
            </div>

            <div className="mt-4 flex items-center gap-3 md:mb-10">
              <Star className="h-5 w-5 text-primary" />
              <Star className="h-5 w-5 text-primary" />
              <Star className="h-5 w-5 text-primary" />
              <StarHalfIcon className="h-5 w-5 text-primary" />
              <span className="text-sm text-primary font-bold">
                4.5 <span className="text-gray-500 ml-2">( 1k+ )</span>
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-white">
                  ${data.price}
                </span>
                <span className="text-xl font-bold text-red-400 line-through mb-0.5">
                  ${data.price * 2}
                </span>
              </div>

              <span className="text-xs text-gray-500 font-semibold">
                Include taxes
              </span>
            </div>

            <div className="mb-6 flex items-center gap-4 text-gray-500">
              <Truck />
              <span className="text-sm">2-3 business days delivery</span>
            </div>

            <div className="flex gap-2 ">
              <AddToCart
                name={data.name}
                description={data.description}
                image={data.images[0]}
                price={data.price}
                currency={"USD"}
                price_id={data.price_id}
              />
              <CheckoutNow
                name={data.name}
                description={data.description}
                image={data.images[0]}
                price={data.price}
                currency={"USD"}
                price_id={data.price_id}
              />
            </div>

            <p className="mt-6 text-gray-500 text-sm text-justify tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
