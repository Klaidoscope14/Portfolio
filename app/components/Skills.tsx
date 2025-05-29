import React from 'react'
import { motion } from 'framer-motion'
import { LanguageDock } from './aceternity/FloatingDock'

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Skills & Technologies
        </motion.h2>
        
        {/* Language Dock */}
        <div className="mb-20">
          <LanguageDock />
        </div>

        {/* Rest of your skills content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Your existing skills cards/content */}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection 