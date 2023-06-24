"use client";

import { StyledTitle } from "./index.style";
import TopSection from "@/components/home/TopSection"
import MiddleSection from "@/components/home/MiddleSection";

export default function Home() {
  return (
    <>
      <StyledTitle variant="h2">Community App</StyledTitle>
      <TopSection />
      <MiddleSection />
    </>
  );
} 
