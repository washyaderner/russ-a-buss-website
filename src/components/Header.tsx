"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Beats', path: '/beats' },
    { name: 'Zzz', path: '/zzz' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Russ A Buss
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-foreground hover:text-primary transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <Link href="/cart" className="mr-2">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="mr-2"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <button onClick={toggleMenu} className="text-foreground focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block py-2 text-foreground hover:text-primary transition duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;