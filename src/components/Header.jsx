import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white/40 backdrop-blur-sm border-b border-slate-200 py-8">
      <div className="container mx-auto px-6 flex flex-col items-center gap-1">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
          Pro<span className="text-gradient">Bits</span>
        </h1>
        <p className="text-sm md:text-base font-bold tracking-widest uppercase text-slate-500">
          Eat What You Love –{" "}
          <span className="text-amber-600">The Fit Way</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
