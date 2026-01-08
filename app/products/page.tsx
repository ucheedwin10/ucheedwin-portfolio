'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ExternalLink,
  Sparkles,
  Globe,
  Zap,
  Server,
  GraduationCap,
  Database,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
} from 'lucide-react'

const categories = ['All', 'AI Products', 'Gov Tech', 'Education']

const products = [
  {
    id: 1,
    name: 'Hont',
    tagline: 'Apply to scholarships in 10 minutes',
    description: 'AI-powered scholarship application platform that reduces application time from 4 hours to just 10 minutes. Built in 2 days, now live with 22 users and 86% activation rate.',
    category: 'AI Products',
    status: 'Live & Growing',
    statusColor: 'bg-green-500',
    icon: Sparkles,
    tech: ['Next.js', 'Supabase', 'Claude API'],
    metrics: [
      { label: 'Users', value: '22' },
      { label: 'Activation', value: '86%' },
      { label: 'Time Saved', value: '90%' },
    ],
    impact: '90% time savings (4h to 10min)',
    link: 'https://hont-ten.vercel.app',
    featured: true,
  },
  {
    id: 2,
    name: 'GenAI Governance Platform',
    tagline: 'AI policy for Nigerian states',
    description: 'Comprehensive AI governance platform deployed across 3 Nigerian states (Lagos, Edo, Kaduna), enabling data-driven policy making and AI ethics compliance.',
    category: 'Gov Tech',
    status: 'Deployed',
    statusColor: 'bg-blue-500',
    icon: Globe,
    tech: ['Next.js', 'DHIS2', 'Vercel'],
    metrics: [
      { label: 'States', value: '3' },
      { label: 'Coverage', value: 'Multi-region' },
      { label: 'Status', value: 'Active' },
    ],
    impact: 'Policy framework for 3 states',
    link: 'https://lagos-genaigov.vercel.app',
    featured: true,
  },
  {
    id: 3,
    name: 'AfroLLM 1.0',
    tagline: 'Language model for Yoruba & Hausa',
    description: 'Large Language Model specifically trained for African languages, focusing on Yoruba and Hausa. Winner of the Project Technical Delivery Award (2024).',
    category: 'AI Products',
    status: 'Production',
    statusColor: 'bg-white',
    icon: Zap,
    tech: ['Python', 'LLM Training', 'NLP'],
    metrics: [
      { label: 'Languages', value: '2' },
      { label: 'Award', value: '2024' },
      { label: 'Status', value: 'Production' },
    ],
    impact: 'Award-winning African language AI',
    link: null,
    featured: true,
  },
  {
    id: 4,
    name: 'OffGPT',
    tagline: 'On-premise enterprise AI',
    description: 'Enterprise-grade AI solution with 2 clients, featuring fully on-premise deployment for data security and compliance. Custom LLM with dedicated GPU infrastructure.',
    category: 'AI Products',
    status: 'Enterprise',
    statusColor: 'bg-purple-500',
    icon: Server,
    tech: ['Custom LLM', 'GPU Infrastructure', 'On-premise'],
    metrics: [
      { label: 'Clients', value: '2' },
      { label: 'Type', value: 'Enterprise' },
      { label: 'Deployment', value: 'On-prem' },
    ],
    impact: 'Secure enterprise AI deployments',
    link: null,
    featured: false,
  },
  {
    id: 5,
    name: 'AI Learning Engine',
    tagline: 'Adaptive learning for millions',
    description: 'Educational AI platform serving 8M+ students with personalized learning paths, achieving 25% engagement increase through adaptive algorithms and USSD accessibility.',
    category: 'Education',
    status: 'Scaled',
    statusColor: 'bg-emerald-500',
    icon: GraduationCap,
    tech: ['Python', 'USSD', 'Adaptive Algorithms'],
    metrics: [
      { label: 'Students', value: '8M+' },
      { label: 'Engagement', value: '+25%' },
      { label: 'Access', value: 'USSD' },
    ],
    impact: '25% engagement increase across 8M+ students',
    link: null,
    featured: false,
  },
  {
    id: 6,
    name: 'Data Collection Platform',
    tagline: 'Community-driven data gathering',
    description: 'Crowdsourced data collection platform with 450 contributors generating 400+ hours of audio data for African language AI training, powered by Telegram Bot integration.',
    category: 'AI Products',
    status: 'Active',
    statusColor: 'bg-cyan-500',
    icon: Database,
    tech: ['Telegram Bot', 'Python', 'Cloud Storage'],
    metrics: [
      { label: 'Contributors', value: '450' },
      { label: 'Audio Hours', value: '400+' },
      { label: 'Platform', value: 'Telegram' },
    ],
    impact: '400+ hours of African language audio data',
    link: null,
    featured: false,
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Products</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            AI products I&apos;ve built and shipped - from concept to production. Each solving real problems with measurable impact.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`card p-6 h-full flex flex-col ${
                    product.featured ? 'ring-1 ring-white/20' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      {product.featured && (
                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                        <span className={`w-2 h-2 ${product.statusColor} rounded-full`} />
                        {product.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-neutral-300 text-sm font-medium mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-neutral-400 text-sm mb-4 flex-grow">
                    {product.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {product.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="text-center p-2 bg-neutral-900 rounded-lg"
                      >
                        <div className="text-lg font-bold text-white">
                          {metric.value}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neutral-900 text-neutral-400 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
                    <TrendingUp size={14} className="text-white" />
                    {product.impact}
                  </div>

                  {/* Link */}
                  {product.link && (
                    <Link
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-neutral-300 transition-colors"
                    >
                      View Project
                      <ExternalLink size={14} />
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-neutral-950 rounded-2xl border border-neutral-800"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Product <span className="gradient-text">Impact Summary</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">8M+</div>
              <div className="text-neutral-400 text-sm">Users Reached</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-neutral-400 text-sm">States Deployed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">90%</div>
              <div className="text-neutral-400 text-sm">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-neutral-400 text-sm">Products Shipped</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
