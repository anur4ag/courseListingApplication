"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import withAuth from "@/components/withAuth";
import React from "react";

const Page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-10 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Explore all <span className="text-blue-600">courses</span>.
          </h1>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
