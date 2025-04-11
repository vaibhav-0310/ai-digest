import React from 'react'; // Make sure React is imported
import { useNavigate } from "react-router-dom";
import { Github, BookOpen, FileCode, Brain } from "lucide-react";
import { motion } from 'framer-motion'; // Import motion
import styles from './Index.module.css';
// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const cardHover = {
  scale: 1.03,
  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
  transition: { type: 'spring', stiffness: 300 }
};

const buttonHover = {
  scale: 1.05,
  transition: { type: 'spring', stiffness: 400, damping: 15 }
};

const logoHover = {
    scale: 1.1,
    rotate: [0, 5, -5, 0], // Little wiggle
    transition: { duration: 0.3 }
}


const Index = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.contentWrapper}>

        {/* Hero Section */}
        <motion.div variants={itemVariants} className={styles.heroSection}>
          <motion.h1 variants={itemVariants} className={styles.heroTitle}>
            AI Digest
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.heroSubtitle}>
            Stay updated with the latest AI research and developments
          </motion.p>

          {/* Login and Signup Buttons */}
          <motion.div variants={itemVariants} className={styles.buttonGroup}>
            <motion.button
              onClick={() => handleNavigation("/login")}
              className={styles.buttonLogin}
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
            <motion.button
              onClick={() => handleNavigation("/signup")}
              className={styles.buttonSignup}
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </motion.div>

          <motion.p variants={itemVariants} className={styles.heroDescription}>
            Our platform fetches, summarizes, and helps you filter the most relevant AI innovations using LLMs
          </motion.p>
        </motion.div>

        {/* Platform Logos */}
        <motion.div variants={itemVariants} className={styles.logosSection}>
          <p className={styles.logosTitle}>
            Integrates with leading AI platforms
          </p>
          {/* Stagger children within the grid */}
          <motion.div
             className={styles.logosGrid}
             variants={containerVariants} // Reuse container for stagger effect
             initial="hidden"
             animate="visible" // Or trigger via viewport scroll
           >
            {[
              { Icon: Github, name: 'GitHub' },
              { Icon: BookOpen, name: 'ArXiv' },
              { Icon: FileCode, name: 'Hugging Face' },
              { Icon: Brain, name: 'LLM Models' },
            ].map(({ Icon, name }) => (
              <motion.div
                key={name}
                className={styles.logoItem}
                variants={itemVariants} // Each logo animates in
                whileHover={logoHover} // Add hover effect
              >
                <Icon size={36} /> {/* Keep size prop */}
                <span>{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div variants={itemVariants} className={styles.featuresSection}>
           {/* Stagger children within the grid */}
          <motion.div
            className={styles.featuresGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible" // Or trigger via viewport scroll
          >
            {/* Research Papers */}
            <motion.div
              className={styles.featureCard}
              variants={itemVariants}
              whileHover={cardHover} // Framer Motion hover effect
            >
              <div className={styles.cardIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>
                Research Papers
              </h3>
              <p className={styles.cardDescription}>
                Stay updated with the latest research papers from ArXiv
              </p>
            </motion.div>

            {/* Code & Models */}
            <motion.div
                className={styles.featureCard}
                variants={itemVariants}
                whileHover={cardHover}
            >
              <div className={styles.cardIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>
                Code & Models
              </h3>
              <p className={styles.cardDescription}>
                Discover the latest AI models and tools from GitHub and Hugging Face
              </p>
            </motion.div>

            {/* AI Summarization */}
            <motion.div
                className={styles.featureCard}
                variants={itemVariants}
                whileHover={cardHover}
            >
              <div className={styles.cardIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>
                AI Summarization
              </h3>
              <p className={styles.cardDescription}>
                Get AI-powered summaries of complex research and innovations
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className={styles.footer}>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} AI Digest. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
