"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Clock,
  Users,
  Share2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const InfoBadge: React.FC<{ icon: LucideIcon; label: string }> = ({
  icon: Icon,
  label,
}) => (
  <div className="flex items-center gap-2 text-muted-foreground">
    <Icon className="h-5 w-5" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const CourseDetailHero = () => {
  const title = "Injective Developer";
  const description =
    "Injective is a lightning fast interoperable layer one blockchain optimized for building the premier Web3 finance applications. Injective uniquely provides developers with powerful plug-and-play financial infrastructure primitives, such as a high performance on-chain decentralized exchange infrastructure, decentralized bridges, oracles, and a composable smart contract layer with CosmWasm.";
  const logoUrl =
    "https://storage.googleapis.com/hackquest-prod-asia-northeast1-private-storage/ecosystem/d606c3252a6f5ec76452d0fec917aaa2a38c3a6f70f3988feacd7e8cb5799ada.webp";

  return (
    <section className="bg-background pt-8 pb-12 md:pb-16">
      <div className="container">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center text-sm font-medium text-muted-foreground"
        >
          <Link
            href="/learning-track"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Explore Course</span>
          </Link>
          <ChevronRight className="mx-1 h-4 w-4" />
          <span className="truncate font-semibold text-foreground">{title}</span>
        </nav>

        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
          <div className="flex-shrink-0 rounded-2xl border border-border bg-card p-4">
            <div className="relative h-24 w-24">
              <Image
                src={logoUrl}
                alt={`${title} logo`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <InfoBadge icon={BarChart3} label="Beginner" />
              <InfoBadge icon={Clock} label="≈10 hours" />
              <InfoBadge icon={Users} label="34,567 Students" />
            </div>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto text-base h-11 px-6">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-11 px-6">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailHero;