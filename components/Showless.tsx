"use client";

import { ShowlessProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

const Showless = ({ pageNumber }: ShowlessProps) => {
  const router = useRouter();

  const handleShowLess = () => {
    const newLimit = "10"
    const newPathName = updateSearchParams("limit", newLimit);

    router.push(newPathName, { scroll: false });
  };
  return (
    <>
      {pageNumber && pageNumber > 1 && (
        <div className="flex h-10 w-full mt-5">
          <button
            className="w-full h-full text-right text-primary-blue underline underline-offset-1"
            onClick={handleShowLess}
          >
            Show less
          </button>
        </div>
      )}
    </>
  );
};

export default Showless;
