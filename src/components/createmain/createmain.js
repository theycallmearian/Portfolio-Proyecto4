import './createmain.scss'

const skills = [
  {
    src: 'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769584/public/assets/skills/html5_lgrx2j.svg',
    alt: 'HTML5 Logo'
  },
  {
    src: 'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769602/public/assets/skills/javascript_xbibqy.svg',
    alt: 'Javascript Logo'
  },
  {
    src: 'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769632/public/assets/skills/sass_l0m7br.svg',
    alt: 'SASS Logo'
  },
  {
    src: 'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769694/public/assets/skills/vitejs_upmowo.svg',
    alt: 'Vite Logo'
  },
  {
    src: 'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769694/public/assets/skills/vscode_lmwat6.svg',
    alt: 'VsCode Logo'
  },
  {
    src: 'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769694/public/assets/skills/wordpress_c1rouu.svg',
    alt: 'Wordpress Logo'
  },
  {
    src: 'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769584/public/assets/skills/css3_qx7xyw.svg',
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
  imgMe.src =
    'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769575/public/assets/profile_x1ddh6.png'
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
