"use client";

import { useEffect, useState } from "react";
import { HomeTabbar } from "./home-tabbar";
import { productType } from "@/constants";
import { client } from "@/sanity/lib/client";

export function ProductGrid() {
  const [selectedTab, setSelectedTab] = useState(productType[0].title || "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = `*[_type == 'product' && variant ==$variant] | order(name asc)`;
  const params = { variant: selectedTab.toLocaleLowerCase() };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(await response);
      } catch (error) {
        console.log("Product fetching Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  );
}
