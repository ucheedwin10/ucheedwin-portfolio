'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Mic,
  MapPin,
  ArrowRight,
  Globe,
  Users,
  Lightbulb,
  BookOpen,
} from 'lucide-react'

interface SpeakingEvent {
  event: string
  topic: string
  location: string
  type: string
  description: string
  highlight?: boolean
}

interface SpeakingEvents {
  [key: string]: SpeakingEvent[]
}

const speakingEvents: SpeakingEvents = {
  '2025': [
    {
      event: 'Pan-Atlantic University',
      topic: 'AI Product Management',
      location: 'Lagos, Nigeria',
      type: 'Guest Lecture',
      description: 'Sharing insights on building and shipping AI products with aspiring product managers.',
    },
    {
      event: '5th ICAIR Conference',
      topic: 'AI Innovation in Africa',
      location: 'Nigeria',
      type: 'Conference',
      description: 'Presenting on the state of AI innovation and practical applications in the African context.',
    },
    {
      event: 'Elevate 4.0 Conference',
      topic: 'Tech Leadership',
      location: 'Nigeria',
      type: 'Conference',
      description: 'Leadership lessons from building technical AI products in emerging markets.',
    },
  ],
  '2024': [
    {
      event: 'IEEE Globecom',
      topic: 'Rural Connectivity via GenAI',
      location: 'Cape Town, South Africa',
      type: 'International Conference',
      description: 'Exploring how generative AI can bridge the digital divide in rural African communities.',
      highlight: true,
    },
    {
      event: 'Columbia SIPA',
      topic: 'GenAI and African Languages',
      location: 'New York, USA',
      type: 'University Talk',
      description: 'Discussing the development of AfroLLM and the importance of AI for African languages.',
      highlight: true,
    },
    {
      event: 'Deep Learning Indaba',
      topic: 'EqualyzAI Pitch',
      location: 'Dakar, Senegal',
      type: 'Conference Pitch',
      description: 'Presenting EqualyzAI at Africa\'s premier machine learning conference.',
      highlight: true,
    },
    {
      event: 'ICT4D Conference',
      topic: 'GenAI for Development',
      location: 'Accra, Ghana',
      type: 'International Conference',
      description: 'How generative AI can accelerate development goals in Africa.',
    },
  ],
}

const speakingTopics = [
  {
    icon: Lightbulb,
    title: 'AI Products',
    description: 'Building and shipping AI products that solve real problems',
  },
  {
    icon: Users,
    title: 'Technical PM',
    description: 'Leading technical teams as a PM who codes',
  },
  {
    icon: Globe,
    title: 'AI Governance',
    description: 'Policy frameworks for responsible AI deployment',
  },
  {
    icon: BookOpen,
    title: 'African Languages',
    description: 'Developing AI for underrepresented languages',
  },
]

export default function SpeakingPage() {
  const years = Object.keys(speakingEvents).sort((a, b) => Number(b) - Number(a))

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
            Speaking <span className="gradient-text">Engagements</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Sharing insights on AI products, technical leadership, and innovation at conferences and universities worldwide.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: '10+', label: 'Global Talks' },
            { value: '5', label: 'Countries' },
            { value: '4', label: 'Continents' },
            { value: '1000+', label: 'Attendees' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="text-center p-6 bg-neutral-950 rounded-xl border border-neutral-800"
            >
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 transform -translate-x-1/2 hidden md:block" />

          {years.map((year) => (
            <motion.div
              key={year}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              {/* Year marker */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center mb-8"
              >
                <span className="px-6 py-2 bg-white text-black font-bold text-xl rounded-full shadow-lg">
                  {year}
                </span>
              </motion.div>

              {/* Events */}
              <div className="space-y-6">
                {speakingEvents[year].map((event, eventIndex) => (
                  <motion.div
                    key={event.event}
                    initial={{ opacity: 0, x: eventIndex % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: eventIndex * 0.1 }}
                    className={`relative md:w-[calc(50%-2rem)] ${
                      eventIndex % 2 === 0
                        ? 'md:mr-auto md:pr-8'
                        : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    {/* Connector dot */}
                    <div className="hidden md:block absolute top-6 w-4 h-4 bg-white rounded-full border-4 border-black"
                      style={{
                        [eventIndex % 2 === 0 ? 'right' : 'left']: '-2.5rem',
                      }}
                    />

                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`card p-6 ${
                        event.highlight
                          ? 'ring-1 ring-white/20 bg-gradient-to-br from-neutral-900 to-neutral-950'
                          : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-white/10 rounded-lg">
                            <Mic className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs font-medium text-white bg-white/10 px-2 py-1 rounded-full">
                            {event.type}
                          </span>
                        </div>
                        {event.highlight && (
                          <span className="text-xs font-medium text-white">
                            Highlight
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-1">
                        {event.event}
                      </h3>
                      <p className="text-neutral-300 font-medium text-sm mb-2">
                        &quot;{event.topic}&quot;
                      </p>
                      <p className="text-neutral-400 text-sm mb-4">
                        {event.description}
                      </p>

                      <div className="flex items-center gap-4 text-neutral-400 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} className="text-white" />
                          {event.location}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Speaking Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Topics I <span className="gradient-text">Speak About</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {speakingTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-neutral-950 rounded-xl border border-neutral-800 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-4">
                  <topic.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-neutral-400 text-sm">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-8 bg-gradient-to-r from-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800"
        >
          <Mic className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            Invite Me to <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-6">
            Looking for a speaker on AI products, technical leadership, or AI governance? I&apos;d love to share insights with your audience.
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
