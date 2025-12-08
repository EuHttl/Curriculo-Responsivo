import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const techStack = [
  { name: 'HTML5', icon: '/svg/html.svg' },
  { name: 'CSS3', icon: '/svg/css.svg' },
  { name: 'JavaScript', icon: '/svg/js.svg' },
  { name: 'React', icon: '/svg/react.svg' },
  { name: 'Node.js', icon: '/svg/node.svg' },
  { name: 'Java', icon: '/svg/java-icon.svg' },
  { name: 'Prisma', icon: '/svg/prisma-original.svg' },
  { name: 'MySQL', icon: '/svg/mysql-icon.svg' }
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/EuHttl', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/hyttalo-costa-1991841b2/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/eu.httl/', label: 'Instagram' }
]

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="home" className="hero-section" ref={ref}>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.p
              className="hero-greeting"
              variants={itemVariants}
            >
              Olá, eu sou
            </motion.p>
            
            <motion.h1
              className="hero-name"
              variants={itemVariants}
            >
              <motion.span
                className="name-part"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{
                  background: 'linear-gradient(135deg, var(--color-white) 0%, var(--color-gray-300) 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Hyttalo
              </motion.span>
              <motion.span
                className="name-part gradient"
                variants={itemVariants}
              >
                Costa
              </motion.span>
            </motion.h1>

            <motion.h2 className="hero-title" variants={itemVariants}>
              Desenvolvedor Full Stack
            </motion.h2>

            <motion.p className="hero-description" variants={itemVariants}>
              Formado em <strong>Análise e Desenvolvimento de Sistemas</strong>, 
              especializado em criar soluções web modernas e eficientes.
            </motion.p>

            <motion.div className="hero-cta" variants={itemVariants}>
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Entrar em Contato
              </motion.a>
            </motion.div>

            <motion.div className="social-links" variants={itemVariants}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="profile-image-wrapper"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="/img/profile.jpeg"
                alt="Hyttalo Costa"
                className="profile-image"
              />
              <motion.div
                className="profile-border"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="tech-stacks"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="tech-label">Tecnologias:</p>
          <div className="tech-icons">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="tech-item"
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 1.5 + index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
              >
                <img src={tech.icon} alt={tech.name} />
                <span className="tech-tooltip">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </motion.div>

      
    </section>
  )
}

export default Hero

