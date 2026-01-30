import React from 'react';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-2xl font-black uppercase tracking-tight">Fashion</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalogue" className="text-sm font-medium hover:opacity-70 transition-opacity">
              CATALOGUE
            </a>
            <a href="#fashion" className="text-sm font-medium hover:opacity-70 transition-opacity">
              FASHION
            </a>
            <a href="#favourite" className="text-sm font-medium hover:opacity-70 transition-opacity">
              FAVOURITE
            </a>
            <a href="#lifestyle" className="text-sm font-medium hover:opacity-70 transition-opacity">
              LIFESTYLE
            </a>
            <button className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors">
              SIGN UP
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
