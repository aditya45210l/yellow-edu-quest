import React from 'react';

const PageHero = () => {
  return (
    <div className="container max-sm:px-6">
      <div className="flex w-full justify-between gap-8 max-sm:pb-6 sm:py-8">
        <div className="flex flex-1 flex-shrink-0 flex-col gap-6">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground">
            Certified Learning Track
          </h1>
          <p className="text-base text-muted-foreground">
            Deep dive into leading ecosystems and become a certified developer
          </p>
        </div>
        <div className="relative hidden h-[196px] w-[352px] shrink-0 sm:block">
          {/*
            NOTE: The original website uses a <canvas> element likely for an animation.
            As no specific asset was provided for the illustration, a styled placeholder is used.
          */}
          <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
            {/* Placeholder for the mascot illustration */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;