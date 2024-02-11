import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export default function Error() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <X className="text-red-600 h-24 w-24 mx-auto my-6" />
        <div className="text-center">
          <h1 className="md:text-3xl text-base text-white font-bold text-center">
            Payment Failed !
          </h1>
          <Link href={"/"}>
            <Button className="mt-8">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
