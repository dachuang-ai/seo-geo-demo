/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Target, Search, ArrowRight, Menu, X, CheckSquare } from 'lucide-react';

interface HeaderProps {
  onDiagnoseClick: () => void;
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onDiagnoseClick, onNavClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '搜尋策略', id: 'strategy-section' },
    { label: 'GEO 架構', id: 'geo-section' },
    { label: '內容群集', id: 'cluster-section' },
    { label: '地圖曝光', id: 'map-section' },
    { label: 'Q&A 結構', id: 'faq-section' },
  ];

  const handleNavItemClick = (id: string) => {
    onNavClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F8F4]/90 backdrop-blur-md shadow-sm border-b border-[#10241F]/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Brand Block */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            {/* Elegant Tech Lab Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#10241F] overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#10241F] to-[#254A41]"></div>
              <div className="relative flex items-center justify-center">
                <Search className="w-5 h-5 text-[#B7F34A] stroke-[2.5]" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#7AC943] border border-[#F7F8F4] glow-point"></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-lg font-extrabold tracking-tight text-[#10241F] font-sans">
                  達創智能科技
                </span>
                <span className="text-[10px] font-black uppercase bg-[#B7F34A] text-[#10241F] py-0.5 px-1.5 rounded-md tracking-wider">
                  AI
                </span>
              </div>
              <span className="text-[10px] tracking-widest font-mono text-[#62706A] uppercase font-bold -mt-0.5">
                Search Growth Lab
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1.5 bg-[#EEF3ED]/60 border border-[#10241F]/5 p-1 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className="px-4 py-1.5 text-sm font-semibold rounded-full text-[#62706A] hover:text-[#10241F] hover:bg-[#FFFFFF] transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onDiagnoseClick}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#10241F] text-[#FFFFFF] text-sm font-bold shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Inner subtle glow */}
              <span className="absolute inset-0 bg-[#B7F34A] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative flex items-center space-x-1">
                <span>預約曝光診斷</span>
                <ArrowRight className="w-4 h-4 text-[#B7F34A] group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#10241F] bg-[#EEF3ED] hover:bg-[#EEF3ED]/80 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#F7F8F4] border-b border-[#10241F]/10 shadow-lg px-4 py-6 space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className="w-full text-left px-4 py-3 text-base font-semibold text-[#10241F] hover:bg-[#EEF3ED] rounded-xl transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-[#10241F]/5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDiagnoseClick();
              }}
              className="w-full py-3.5 rounded-xl bg-[#10241F] text-[#FFFFFF] font-bold text-center flex items-center justify-center space-x-2"
            >
              <span>預約曝光診斷</span>
              <ArrowRight className="w-4 h-4 text-[#B7F34A]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
