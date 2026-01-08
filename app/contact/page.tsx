'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Linkedin,
  BookOpen,
  MapPin,
  Send,
  CheckCircle,
  Mic,
  Briefcase,
  Users,
  Lightbulb,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ucheedwin10@gmail.com',
    href: 'mailto:ucheedwin10@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/uche-edwin',
    href: 'https://linkedin.com/in/uche-edwin',
  },
  {
    icon: BookOpen,
    label: 'Medium',
    value: 'medium.com/@ucheedwin10',
    href: 'https://medium.com/@ucheedwin10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: null,
  },
]

const opportunities = [
  {
    icon: Mic,
    title: 'Speaking',
    description: 'Conferences, podcasts, and university lectures',
  },
  {
    icon: Briefcase,
    title: 'Technical PM Roles',
    description: 'Full-time or contract positions',
  },
  {
    icon: Users,
    title: 'Advisory',
    description: 'AI product strategy and technical guidance',
  },
  {
    icon: Lightbulb,
    title: 'Collaboration',
    description: 'AI projects and partnerships',
  },
]

const subjectOptions = [
  'Speaking Opportunity',
  'Job Opportunity',
  'Advisory/Consulting',
  'Collaboration',
  'General Inquiry',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Log to console as specified
    console.log('Contact Form Submission:', formData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after showing success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 5000)
  }

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
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Have a project in mind, want me to speak at your event, or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Contact <span className="gradient-text">Info</span>
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-white/10 rounded-xl">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-neutral-400 text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('mailto') ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-neutral-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What I'm Open To */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                What I&apos;m <span className="gradient-text">Open To</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {opportunities.map((opp, index) => (
                  <motion.div
                    key={opp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="p-4 bg-neutral-950 rounded-xl border border-neutral-800"
                  >
                    <div className="p-2 bg-white/10 rounded-lg w-fit mb-3">
                      <opp.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {opp.title}
                    </h3>
                    <p className="text-neutral-400 text-xs">{opp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6">
                Send a <span className="gradient-text">Message</span>
              </h2>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-400">
                      Thanks for reaching out. I&apos;ll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-neutral-400 text-sm mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-neutral-400 text-sm mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-neutral-400 text-sm mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-neutral-600 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-neutral-400 text-sm mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
