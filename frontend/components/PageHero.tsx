import React from "react";

/**
 * Shared page hero band, matching the homepage hero theme.
 *
 * The skewed burgundy panels only appear at lg+ where there is room for them
 * to sit entirely to the right of the copy. Below lg the band stays flat
 * #EAECEF so text is never laid over the burgundy.
 */
export default function PageHero({
  children,
  aside,
}: {
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative flex items-center pt-32 pb-20 mb-16 overflow-hidden bg-[#EAECEF]">
      {/* Diagonal Shape Background - lg+ only, kept clear of the copy column */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[42%] bg-[#8B1C31] transform skew-x-[-10deg] translate-x-[14%] origin-bottom-right shadow-2xl z-0"></div>
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[38%] bg-[#6A1525] transform skew-x-[-10deg] translate-x-[18%] origin-bottom-right z-0 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {children}
          </div>
          {aside ? (
            <div className="lg:col-span-6 animate-in fade-in zoom-in-95 duration-1000 delay-200">
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
