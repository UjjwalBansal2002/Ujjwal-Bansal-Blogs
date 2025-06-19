'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Load theme on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    setTheme(isDark ? 'light' : 'dark');
  };

  const ThemeButton = (
    <button
      onClick={toggleTheme}
      className="text-sm px-3 py-1 rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-800 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400">Ujjwal Blog</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-gray-700 dark:text-gray-200">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          {ThemeButton}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-gray-700 dark:text-gray-200">
          <Link href="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
          <div>{ThemeButton}</div>
        </div>
      )}
    </nav>
  );
}
