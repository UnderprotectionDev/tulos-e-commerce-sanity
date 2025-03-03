"use client";

import { useState } from "react";
import { HomeTabbar } from "./home-tabbar";

export function ProductGrid() {
  const [selectedTab, setSelectedTab] = useState("all");
  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  );
}
