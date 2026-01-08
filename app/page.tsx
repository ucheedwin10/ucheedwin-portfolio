'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Briefcase,
  Rocket,
  Award,
  Mic,
  ExternalLink,
  Sparkles,
  Globe,
  Users,
  Zap,
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const stats = [
  { icon: Briefcase, value: '7+', label: 'Years Experience' },
  { icon: Rocket, value: '5+', label: 'Products Shipped' },
  { icon: Award, value: '2x', label: 'Award Winner' },
  { icon: Mic, value: '10+', label: 'Global Talks' },
]

const featuredProducts = [
  {
    name: 'Hont AI',
    description: 'Apply to scholarships in 10 minutes',
    status: 'Live & Growing',
    statusColor: 'bg-green-500',
    icon: Sparkles,
    link: 'https://hont-ten.vercel.app',
  },
  {
    name: 'GenAI Governance Platform',
    description: 'AI policy for 3 Nigerian states',
    status: 'Deployed',
    statusColor: 'bg-blue-500',
    icon: Globe,
    link: 'https://lagos-genaigov.vercel.app',
  },
  {
    name: 'AfroLLM 1.0',
    description: 'Language model for Yoruba & Hausa',
    status: 'Production',
    statusColor: 'bg-white',
    icon: Zap,
    link: '/products',
  },
]

const speakingHighlights = [
  'IEEE Globecom, South Africa',
  'Columbia SIPA, USA',
  'Deep Learning Indaba, Senegal',
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            {/* Profile Image */}
            <motion.div
              variants={fadeInUp}
              className="relative mb-8"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-2xl" />
                {/* Profile photo */}
                <div className="relative w-full h-full rounded-full border-2 border-neutral-700 overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Uche Edwin"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInUp} className="space-y-6 max-w-4xl">
              <motion.span
                className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                Technical AI Product Manager
              </motion.span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="gradient-text">Uche Edwin</span>
              </h1>

              {/* Expanded Hero Text */}
              <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                <p className="text-white text-xl sm:text-2xl font-medium">
                  I&apos;m a Technical AI Product Manager who doesn&apos;t just manage products—I build them.
                </p>

                <p>
                  Over the past 7 years, I&apos;ve led the development and deployment of AI products that solve real problems: from <span className="text-white">AfroLLM</span> (a language model for African languages) to <span className="text-white">GenAI Governance</span> platforms used by Nigerian state governments, to <span className="text-white">Hont</span> (an AI scholarship assistant built in a weekend).
                </p>

                <p>
                  What makes me different? <span className="text-white">I code.</span> I learned full-stack development because I wanted to truly understand the technology I was building. Now I can ship MVPs solo, debug alongside engineers, and make informed architecture decisions.
                </p>

                <p>
                  I believe the best products come from deeply understanding both the problem and the solution. That&apos;s why I&apos;ve spent thousands of hours not just managing roadmaps, but writing code, training models, and shipping features.
                </p>

                <p>
                  Currently leading AI product development at <span className="text-white">EqualyzAI</span>, speaking at global conferences about AI governance and African language technology, and building side projects that scratch my own itches.
                </p>

                <p className="text-white text-xl font-medium pt-2">
                  Let&apos;s build something remarkable together.
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2"
                >
                  Let&apos;s Talk
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-950 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              AI products I&apos;ve built and shipped that are making real impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={product.link} target={product.link.startsWith('http') ? '_blank' : undefined}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="card p-6 h-full group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-white/10 rounded-xl">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-text-muted">
                        <span className={`w-2 h-2 ${product.statusColor} rounded-full`} />
                        {product.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-text-muted text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center text-white text-sm font-medium">
                      Learn more
                      <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent Speaking Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Recent <span className="gradient-text">Speaking</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Sharing insights on AI products and technical leadership globally
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {speakingHighlights.map((event, index) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-text-muted hover:text-white hover:border-neutral-600 transition-colors"
              >
                <Mic className="inline-block w-4 h-4 mr-2" />
                {event}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/speaking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View All Talks
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800 p-8 sm:p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
            <div className="relative">
              <Users className="w-12 h-12 text-white mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Let&apos;s Build Something <span className="gradient-text">Together</span>
              </h2>
              <p className="text-text-muted max-w-xl mx-auto mb-8">
                Whether you need a technical AI PM, a speaker for your event, or an advisor for your AI project - I&apos;m here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    Get In Touch
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    Learn More About Me
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
