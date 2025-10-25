"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function RewardBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="-mt-6 sm:-mt-8 relative flex flex-col items-center justify-between gap-y-4 border-b border-[#FFF099] bg-[linear-gradient(270deg,#FFF_0%,#FFF099_100%)] py-6 pl-6 pr-6 sm:flex-row sm:py-4 sm:pr-20">
      <button
        aria-label="Close"
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 flex size-6 items-center justify-center sm:top-1/2 sm:right-6 sm:-translate-y-1/2"
      >
        <X className="size-5 text-muted-foreground" />
      </button>

      <div className="flex items-center gap-x-6">
        <Image
          alt="Credit Card"
          width={106}
          height={76}
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/credit_card-1.png"
          className="hidden sm:block"
        />
        <div className="flex flex-col">
          <div className="flex flex-col-reverse gap-x-4 gap-y-2 sm:flex-row sm:items-center">
            <h2 className="font-heading text-lg font-bold">
              Welcome back! Claim your UR reward
            </h2>
            <div className="flex items-center gap-x-1 self-start rounded-lg bg-[#FFE5B4] px-2.5 py-0.5 sm:self-center">
              <Image
                alt="Gift"
                width={12}
                height={12}
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/svgs/gift-2.svg"
              />
              <span className="text-xs uppercase text-secondary-foreground">
                LIMITED-TIME OFFER
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Open UR Card · Supports Apple Pay / Google Pay / WeChat Pay / Alipay
            <br className="hidden sm:block" />
            Register in 3 minutes, get $5 instantly
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-y-4 sm:w-auto">
        <button className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-xl bg-[#FBBF24] px-4 py-3 text-base font-bold text-secondary-foreground transition-colors hover:bg-yellow-500 active:scale-95 sm:w-52">
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            Sign in to claim
          </span>
        </button>
        <div className="flex items-center gap-x-5">
          <Image
            alt="Apple Pay"
            width={36}
            height={16}
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/svgs/apple_pay-3.svg"
          />
          <Image
            alt="Google Pay"
            width={36}
            height={16}
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/svgs/google_pay-4.svg"
          />
          <Image
            alt="Wechat"
            width={18}
            height={16}
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/svgs/wechat-5.svg"
          />
          <Image
            alt="Alipay"
            width={16}
            height={16}
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/svgs/alipay-6.svg"
          />
        </div>
      </div>
    </div>
  );
}