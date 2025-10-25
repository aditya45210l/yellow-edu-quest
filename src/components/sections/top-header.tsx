"use client";

import { Bell, Menu, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TestConnectButton } from "../layout/TestConnectButton";

interface TopHeaderProps {
  onMenuClick?: () => void;
}

const TopHeader = ({ onMenuClick }: TopHeaderProps) => {
  return (
    <header className="h-16 border-b border-border bg-white px-6 sm:px-8">
      <div className="relative flex h-full w-full items-center justify-between max-sm:justify-center">
        {/* Search Bar (Desktop) */}
        <div className="relative hidden w-[400px] items-center sm:flex">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search for hackathon keywords, topics, etc."
            className="h-10 w-full rounded-md border border-border bg-transparent pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={onMenuClick}
          aria-label="Open sidebar"
          className="absolute left-0 top-1/2 -translate-y-1/2 outline-none sm:hidden"
        >
          <Menu className="h-6 w-6 text-primary" />
        </button>

        {/* Right-side Actions */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0">
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden sm:block">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-lg bg-muted hover:bg-accent"
                aria-label="Notifications"
              >
                <Bell className="h-[18px] w-[18px] text-foreground" />
              </Button>
            </div>

            {/* <Button
              variant="outline"
              className="h-8 rounded-md border-muted-foreground bg-card px-3 text-sm font-bold text-foreground transition-all hover:bg-accent sm:h-9 sm:rounded-lg sm:px-4"
            >
              Sign in
            </Button>
            
            <Button
              className="hidden h-9 rounded-lg bg-[#FBBF24] px-4 text-sm font-bold text-foreground hover:bg-[#F59E0B] sm:inline-flex"
            >
              Sign up
            </Button> */}
            <TestConnectButton/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;