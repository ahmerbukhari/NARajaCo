import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-transparent">
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Animated outer rings */}
        <div className="absolute inset-0 border-[3px] border-slate-200 rounded-full"></div>
        <div className="absolute inset-0 border-[3px] border-[#8B1C31] rounded-full border-t-transparent animate-spin" style={{ animationDuration: '1.5s' }}></div>
        <div className="absolute inset-3 border-[3px] border-[#8B1C31]/30 rounded-full border-b-transparent animate-[spin_2s_linear_infinite_reverse]"></div>
        
        {/* Center Logo */}
        <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100 animate-pulse">
          <div className="w-full h-full rounded-full border-2 border-[#8B1C31] flex items-center justify-center relative">
            <div className="absolute inset-[2px] rounded-full border border-[#8B1C31]"></div>
            <span className="text-xl font-extrabold text-[#8B1C31] italic pr-0.5">N</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col items-center gap-3">
        <span className="text-[#8B1C31] font-bold tracking-widest uppercase text-sm animate-pulse">
          Loading
        </span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#8B1C31] animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 rounded-full bg-[#8B1C31] animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 rounded-full bg-[#8B1C31] animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
}

