import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa'

const contacts = [
  {
    icon: FaMapMarkerAlt,
    title: 'Localização',
    info: 'São Paulo, Brasil'
  },
  {
    icon: FaEnvelope,
    title: 'E-mail',
    info: 'hyttalo2002@gmail.com',
    link: 'mailto:hyttalo2002@gmail.com'
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    info: '(11) 94257-9879',
    link: 'https://api.whatsapp.com/send/?phone=5511942579879&text&type=phone_number&app_absent=0'
  },
  {
    icon: FaLinkedinIn,
    title: 'LinkedIn',
    info: '/hyttalo-costa',
    link: 'https://www.linkedin.com/in/hyttalo-costa-1991841b2/'
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const mailtoLink = `mailto:hyttalo2002@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`
      window.location.href = mailtoLink
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="contacts-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span className="section-label" variants={containerVariants}>
            Entre em Contato
          </motion.span>
          <motion.h2 className="section-title" variants={containerVariants}>
            Vamos Conversar?
          </motion.h2>
          <motion.div className="title-underline" variants={containerVariants} />
          <motion.p
            className="section-subtitle"
            variants={containerVariants}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Estou sempre aberto a novas oportunidades e projetos interessantes.
          </motion.p>
        </motion.div>

        <motion.div
          className="contacts-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.title}
              className="contact-card"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="contact-icon">
                <contact.icon />
              </div>
              <div className="contact-info">
                <h3>{contact.title}</h3>
                {contact.link ? (
                  <a href={contact.link} target="_blank" rel="noopener noreferrer">
                    {contact.info}
                  </a>
                ) : (
                  <p>{contact.info}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="form-title">Envie uma Mensagem</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Assunto da mensagem"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Sua mensagem aqui..."
              ></textarea>
            </div>
            {submitStatus && (
              <motion.div
                className={`form-status ${submitStatus}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitStatus === 'success' 
                  ? 'Mensagem enviada com sucesso!'
                  : 'Erro ao enviar mensagem. Tente novamente.'}
              </motion.div>
            )}
            <motion.button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane />
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </motion.button>
          </form>
        </motion.div>
      </div>

      
    </section>
  )
}

export default Contact

