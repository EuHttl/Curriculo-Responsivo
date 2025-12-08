import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaJs, FaReact, FaNodeJs, FaJava, FaDatabase, FaServer } from 'react-icons/fa'

const skills = [
  { icon: FaJs, name: 'JavaScript' },
  { icon: FaReact, name: 'React.js' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: FaJava, name: 'Java' },
  { icon: FaDatabase, name: 'MySQL' },
  { icon: FaServer, name: 'Backend' }
]

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span className="section-label" variants={itemVariants}>
            Sobre Mim
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Desenvolvedor Full Stack
          </motion.h2>
          <motion.div className="title-underline" variants={itemVariants} />
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-wrapper">
              <img src="/img/andras-vas-Bd7gNnWJBkU-unsplash.jpg" alt="Desenvolvimento" />
              <div className="image-overlay" />
            </div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-intro">
              <p className="intro-text">
                Olá! Sou <strong>Hyttalo Costa</strong>, desenvolvedor Full Stack formado em 
                <strong> Análise e Desenvolvimento de Sistemas</strong>.
              </p>
            </div>

            <div className="about-description">
              <p>
                Tenho 23 anos e sou apaixonado por tecnologia e desenvolvimento de software. 
                Formado em Análise e Desenvolvimento de Sistemas, venho me especializando 
                em tecnologias modernas para criar soluções web completas e eficientes.
              </p>
              <p>
                Minha stack principal inclui <strong>JavaScript</strong>, <strong>React.js</strong>, 
                <strong> Node.js</strong>, <strong>Java</strong>, <strong>Prisma</strong> e 
                <strong> MySQL</strong>. Estou sempre em busca de novos desafios e oportunidades 
                para crescer profissionalmente.
              </p>
            </div>

            <div className="about-skills">
              <h3>Principais Competências</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ scale: 1.05, x: 5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <skill.icon />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="about-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="/hyttalocosta2025.pdf"
                download="Hyttalo_Costa_Curriculo.pdf"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaServer style={{ display: 'inline', marginRight: '0.5rem' }} />
                Baixar Currículo
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  )
}

export default About

