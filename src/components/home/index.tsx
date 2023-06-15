"use client";

import { StyledTitle } from "./index.style";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";

export default function Home() {
  return (
    <>
      <StyledTitle variant="h2">Community App</StyledTitle>
      <TopSection />
      <MiddleSection />
    </>
  );
}
