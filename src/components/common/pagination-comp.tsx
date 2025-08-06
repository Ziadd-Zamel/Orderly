"use client";

import React, { FC } from "react";
import { PaginationComponent } from "../ui/pagination";
import { useMediaChecker } from "@/hooks/use-media-checker";

// Define the props type based on PaginationComponent's props
type PaginationCompProps = React.ComponentProps<typeof PaginationComponent>;

const PaginationComp: FC<PaginationCompProps> = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) => {
  const media = useMediaChecker();
  const smScreen = media?.screenSizes?.smScreen ?? false;

  return (
    <PaginationComponent
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      maxVisiblePages={smScreen ? 4 : 5}
    />
  );
};

export default PaginationComp;
