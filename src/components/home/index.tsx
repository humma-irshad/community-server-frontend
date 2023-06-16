"use client";

import { StyledTitle } from "./index.style";
import MiddleSection from "./middleSection";
import TopSection from "./topSection";

export default function Home() {
  return (
    <>
      <StyledTitle variant="h2">Community App</StyledTitle>
      <TopSection />
      <MiddleSection />
    </>
  );
}
