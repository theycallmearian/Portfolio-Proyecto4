import './createmain.scss'

const skills = [
  {
    src: './public/assets/skills/html5.svg',
    alt: 'HTML5 Logo'
  },
  {
    src: './public/assets/skills/javascript.svg',
    alt: 'Javascript Logo'
  },
  {
    src: './public/assets/skills/sass.svg',
    alt: 'SASS Logo'
  },
  {
    src: './public/assets/skills/vitejs.svg',
    alt: 'Vite Logo'
  },
  {
    src: './public/assets/skills/vscode.svg',
    alt: 'VsCode Logo'
  },
  {
    src: './public/assets/skills/wordpress.svg',
    alt: 'Wordpress Logo'
  },
  {
    src: './public/assets/skills/css3.svg',
    alt: 'CSS3 Logo'
  }
]

export const createMain = () => {
  const main = document.createElement('main')
  const saludo = document.createElement('article')
  const pHi = document.createElement('p')
  const content = document.createElement('div')
  const title = document.createElement('h1')
  const subtitle = document.createElement('p')
  const imgMe = document.createElement('img')

  saludo.classList.add('principal')
  pHi.classList.add('saludo')
  content.classList.add('content')
  title.classList.add('title')
  subtitle.classList.add('subtitle')
  imgMe.classList.add('profilepicture')

  pHi.textContent = '¡Hola 👋🏻! '
  title.textContent = 'Soy Desarrollador Web'
  subtitle.textContent = 'Servicio integral de imagen corporativa y diseño web'
  imgMe.src = './public/assets/profile.png'
  imgMe.alt = 'Fotografía de Àrian Castro'

  content.appendChild(pHi)
  content.appendChild(title)
  content.appendChild(subtitle)
  saludo.appendChild(imgMe)
  saludo.appendChild(content)
  main.appendChild(saludo)

  const aboutAndSkillsSection = document.createElement('section')
  const aboutMeTitle = document.createElement('h3')
  aboutMeTitle.setAttribute('id', 'aboutme')
  const aboutMeContent = document.createElement('p')
  aboutAndSkillsSection.classList.add('aboutme-skills')
  aboutMeTitle.textContent = 'Sobre mí'
  aboutMeContent.textContent =
    'Soy un apasionado del diseño y maquetación web, buscando siempre la perfección y la satisfacción de mis clientes. Trabajo con HTML, CSS, SCSS, JS, Vite, Wodrpress y me encanta aprender nuevos lenguajes. Me considero una persona perfeccionista, creativa, metódica, comunicativa, con capacidad de liderazgo, trabajo en equipo, don de gentes e impulsor de buen clima laboral.'

  aboutAndSkillsSection.appendChild(aboutMeTitle)
  aboutAndSkillsSection.appendChild(aboutMeContent)

  const skillsTitle = document.createElement('h3')
  skillsTitle.setAttribute('id', 'skills')
  const skillsContainer = document.createElement('div')

  skillsTitle.textContent = 'Skills'
  skillsTitle.classList.add('skills-title')
  skillsContainer.classList.add('skills-container')

  skills.forEach((skill) => {
    const skillImg = document.createElement('img')
    skillImg.src = skill.src
    skillImg.alt = skill.alt
    skillsContainer.appendChild(skillImg)
  })
  aboutAndSkillsSection.appendChild(skillsTitle)
  aboutAndSkillsSection.appendChild(skillsContainer)

  main.appendChild(aboutAndSkillsSection)

  document.body.appendChild(main)
}
