'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = [
  { name: 'Our Mission', href: '/mission' },
  { name: 'About', href: '/about' },
  { name: 'Innovation', href: '/innovation' },
  { name: 'My Stable', href: '/stable' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-zinc-900/80 border-white/10 backdrop-blur'
          : 'bg-black border-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={
                scrolled
                  ? '/icons/evolutionstables-mono-grey.svg'
                  : '/icons/evolutionstables-mono-gold.svg'
              }
              alt="Logo"
              className="h-8 w-auto transition-all duration-300"
            />
          </Link>

          {/* Center: Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'transition-colors hover:text-yellow-400',
                  pathname === item.href ? 'text-yellow-400' : 'text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Buttons */}
          <div className="hidden md:flex gap-4">
            <Link
              href="/get-started"
              className="border border-white px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="border border-white px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
