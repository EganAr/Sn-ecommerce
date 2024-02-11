import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function Success() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 h-24 w-24 mx-auto my-6" />
        <div className="text-center">
          <h1 className="md:text-3xl text-base text-white font-bold text-center">
            Payment Success !
          </h1>
          <p className="text-primary mt-2">Thank you for your purchase</p>

          <Link href={"/"}>
            <Button className="mt-8">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
