'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin, Mail, BookOpen, MapPin, Heart } from 'lucide-react'

const socialLinks = [
  {
    href: 'https://linkedin.com/in/uche-edwin',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:ucheedwin10@gmail.com',
    icon: Mail,
    label: 'Email',
  },
  {
    href: 'https://medium.com/@ucheedwin10',
    icon: BookOpen,
    label: 'Medium',
  },
]

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="text-primary">U</span>
                <span className="text-text">E</span>
              </span>
              <span className="text-text font-semibold">Uche Edwin</span>
            </Link>
            <p className="text-text-muted text-sm max-w-xs">
              Technical AI Product Manager building and shipping AI products that make a difference.
            </p>
            <div className="flex items-center text-text-muted text-sm">
              <MapPin size={16} className="mr-2 text-primary" />
              Lagos, Nigeria
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-text font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-background rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-text-muted text-sm mt-4">
              Open to speaking opportunities, advisory roles, and collaborations.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {currentYear} Uche Edwin. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center">
            Built with Next.js &amp;{' '}
            <Heart size={14} className="mx-1 text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  )
}
