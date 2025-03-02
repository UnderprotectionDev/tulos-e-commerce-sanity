"use client";
import { AlignLeft } from "lucide-react";
import { Sidebar } from "./sidebar";
import { useState } from "react";

export function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSidebarOpen(true)}>
        <AlignLeft className="hover:text-[var(--dark-color)] hoverEffect md:hidden" />
      </button>
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
}
