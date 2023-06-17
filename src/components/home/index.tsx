"use client";

import { StyledTitle } from "./index.style";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";

export default function Home() {
  return (
    <>
      <StyledTitle variant="h2">Community App</StyledTitle>
      <TopSection />
      <MiddleSection />
    </>
  );
}
