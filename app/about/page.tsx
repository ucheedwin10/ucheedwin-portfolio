'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Code,
  Brain,
  Users,
  Award,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Target,
  Heart,
} from 'lucide-react'

const skills = {
  'AI/ML': [
    { name: 'Claude API', level: 80 },
    { name: 'Python', level: 60 },
    { name: 'Prompt Engineering', level: 80 },
  ],
  'Full-Stack': [
    { name: 'Next.js', level: 80 },
    { name: 'TypeScript', level: 70 },
    { name: 'Supabase', level: 80 },
  ],
  'Product': [
    { name: 'Strategy', level: 100 },
    { name: 'Leadership', level: 95 },
    { name: 'Stakeholder Mgmt', level: 90 },
  ],
}

const awards = [
  {
    title: 'Leadership Excellence',
    organization: 'EqualyzAI',
    year: '2025',
    description: 'Recognized for exceptional leadership in driving AI initiatives across the organization.',
  },
  {
    title: 'Project Technical Delivery',
    organization: 'EqualyzAI',
    year: '2024',
    description: 'Awarded for the successful technical delivery of AfroLLM 1.0 for Yoruba and Hausa languages.',
  },
]

const education = [
  {
    degree: 'MBA (AI & Automation)',
    institution: 'Nexford University',
    year: '2024',
    description: 'Specialized in AI and Automation, combining business strategy with technical AI knowledge.',
  },
  {
    degree: 'B.Eng Electrical/Electronics',
    institution: 'University of Benin',
    year: '2014',
    description: 'Foundation in engineering principles and analytical thinking.',
  },
]

const values = [
  {
    icon: Target,
    title: 'Ship Fast',
    description: 'I believe in building and shipping MVPs quickly to validate ideas with real users.',
  },
  {
    icon: Code,
    title: 'Technical Depth',
    description: 'As a PM who codes, I bridge the gap between strategy and implementation.',
  },
  {
    icon: Heart,
    title: 'Impact First',
    description: 'Every product I build aims to solve real problems for real people.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Technical AI Product Manager with a passion for building products that matter.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-2xl" />
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 flex items-center justify-center overflow-hidden">
                <div className="text-9xl font-bold gradient-text">UE</div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-neutral-900 border border-neutral-800 rounded-xl p-3 shadow-lg"
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-neutral-900 border border-neutral-800 rounded-xl p-3 shadow-lg"
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              My <span className="gradient-text">Story</span>
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>
                I&apos;m a Technical AI Product Manager with <span className="text-white font-medium">7+ years</span> of experience building and shipping AI products. I don&apos;t just manage - <span className="text-white font-medium">I code</span>.
              </p>
              <p>
                I learned full-stack development to understand technology deeply and ship MVPs solo. This technical foundation allows me to bridge the gap between product strategy and engineering execution.
              </p>
              <p>
                From building <span className="text-white font-medium">AfroLLM</span> for African languages to deploying <span className="text-white font-medium">GenAI Governance</span> platforms across Nigerian states, I focus on products that create real impact.
              </p>
              <p>
                My approach is simple: <span className="text-white font-medium">Build fast, ship faster, iterate based on real user feedback</span>. That&apos;s how Hont went from idea to live product with 22 users in just 2 days.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            What Drives <span className="gradient-text">Me</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="card p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {category === 'AI/ML' && <Brain className="w-5 h-5 text-white" />}
                    {category === 'Full-Stack' && <Code className="w-5 h-5 text-white" />}
                    {category === 'Product' && <Users className="w-5 h-5 text-white" />}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                </div>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-neutral-400 text-sm">{skill.name}</span>
                        <span className="text-white text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-white to-neutral-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-white">
                        {award.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-white/10 text-white text-xs font-medium rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-neutral-300 text-sm font-medium mb-2">
                      {award.organization}
                    </p>
                    <p className="text-neutral-400 text-sm">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <span className="px-2 py-0.5 bg-neutral-900 text-neutral-400 text-xs font-medium rounded-full border border-neutral-800">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-neutral-300 text-sm font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-neutral-400 text-sm">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-gradient-to-r from-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800"
        >
          <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            Want to Work <span className="gradient-text">Together?</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-6">
            I&apos;m always open to discussing new projects, speaking opportunities, or ways we can collaborate.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
