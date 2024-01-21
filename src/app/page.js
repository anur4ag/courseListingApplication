import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for premium{" "}
            <span className="text-blue-600">digital courses</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Unleash your potential. Dive into expert-crafted content, advance
            your skills, and propel your success forward. Your journey to
            excellence begins now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/sign-up" className={buttonVariants()}>
              Register now
            </Link>
            <Button variant="ghost">Explore Courses &rarr;</Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/doodle.png"
            alt="doodle of a person studying"
            width={250}
            height={250}
          />
        </div>
        {/* TODOS : list all products */}
      </MaxWidthWrapper>
    </>
  );
}
