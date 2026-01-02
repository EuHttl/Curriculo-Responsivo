import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Site Restaurante',
    description: 'Desenvolvimento completo de um site para restaurante, incluindo design responsivo, criação de imagens e implementação de todas as funcionalidades necessárias.',
    image: '/img/Universo do lanche (400 x 400 px) (A4).jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://universodolanche.vercel.app/',
    githubUrl: null
  },
  {
    title: 'Tela de Login',
    description: 'Interface de login moderna desenvolvida com React e Vite. Landing page responsiva com design contemporâneo e animações suaves.',
    image: '/img/tela-de-acesso.png',
    tags: ['React', 'Vite', 'CSS'],
    liveUrl: 'https://tela-de-acesso.vercel.app/',
    githubUrl: 'https://github.com/EuHttl/telaDeAcesso'
  },
  {
    title: 'Jogo da Velha',
    description: 'Jogo da velha interativo desenvolvido com JavaScript puro, HTML e CSS. Projeto educacional focado em lógica de programação e manipulação do DOM.',
    image: '/img/jogo-da-velha.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://jogodavelhah.vercel.app/',
    githubUrl: 'https://github.com/EuHttl/jogodavelha'
  },
  {
    title: 'TeleUp',
    description: 'Solução #1 em gamificação para call centers. Transforme seu call center em uma experiência gamificada com sistema de pontos, rankings em tempo real, competições entre equipes e métricas detalhadas. Aumente a produtividade, reduza o turnover e motive sua equipe com resultados garantidos em 30 dias.',
    image: '/img/teleup_login_screen.png',
    tags: ['React', 'Node.js', 'TypeScript'],
    liveUrl: 'https://teleupvercelapp.vercel.app/',
    githubUrl: 'https://github.com/EuHttl/teleup'
  },
  {
    title: 'QR Code Generator',
    description: 'Gerador de QR Code versátil e intuitivo. Permite criar códigos QR personalizados para diversos fins, com opções de customização e download.',
    image: '#',
    tags: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://github.com/EuHttl/qrcode.generator',
    githubUrl: 'https://github.com/EuHttl/qrcode.generator'
  },
  {
    title: 'JohariTele-up',
    description: 'Aplicação web desenvolvida para comunicação e gestão. Interface moderna e responsiva com funcionalidades avançadas de interação e gerenciamento de dados.',
    image: '/img/johari.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://johari-tele-up.vercel.app/',
    githubUrl: 'https://github.com/EuHttl/JohariTele-up'
  },
  {
    title: 'MeuCaixa',
    description: 'Sistema de controle financeiro e gestão de caixa. Aplicação completa para gerenciamento de receitas, despesas e relatórios financeiros detalhados.',
    image: '/img/meuCaixa.png',
    tags: ['React', 'Node.js', 'MySQL'],
    liveUrl: 'https://meucaixa.vercel.app/',
  }
]

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('Todos')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const allTags = ['Todos', ...new Set(projects.flatMap(p => p.tags))]

  const filteredProjects = selectedFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedFilter))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span className="section-label" variants={containerVariants}>
            Meus Projetos
          </motion.span>
          <motion.h2 className="section-title" variants={containerVariants}>
            Portfólio de Trabalhos
          </motion.h2>
          <motion.div className="title-underline" variants={containerVariants} />
        </motion.div>

        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${selectedFilter === tag ? 'active' : ''}`}
              onClick={() => setSelectedFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          key={selectedFilter}
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-image">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} />
                  <motion.div
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.div>
                </a>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      Código
                    </motion.a>
                  )}
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    Visualizar
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      
    </section>
  )
}

export default Projects

