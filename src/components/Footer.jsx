import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/EuHttl', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/hyttalo-costa-1991841b2/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/eu.httl/', label: 'Instagram' }
  ]

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="footer-quote">
            "Buscando o meu melhor, até nos meus piores momentos"
          </p>
          
          <motion.div
            className="footer-social"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
          
          <p className="footer-copyright">
            &copy; {currentYear} Hyttalo Costa. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>

      
    </footer>
  )
}

export default Footer

