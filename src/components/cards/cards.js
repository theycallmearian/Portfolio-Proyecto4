// Importar estilos CSS
import './cards.scss'

const projects = [
  {
    title: 'ArianPizza',
    description: 'Réplica de la Web de Telepizza con solo HTML y CSS',
    image: './public/assets/projects/arianpizza2.png',
    link: 'https://proyecto1arianpizza.netlify.app/'
  },
  {
    title: 'Arianoid',
    description: 'Buscador de imágenes combinando HTML, CSS y JS.',
    image: './public/assets/projects/arianoid2.png',
    link: 'https://arianoid-proyecto3.netlify.app/'
  },
  {
    title: 'Rock The Vinyl',
    description: 'Página responsive Flex con solo HTML y CSS.',
    image: './public/assets/projects/rocktheviniyl2.png',
    link: 'https://practicaflexariancastro.netlify.app/'
  },
  {
    title: 'Arian Mobile',
    description: 'Tienda de móviles combinando HTML, CSS y JS.',
    image: './public/assets/projects/arianmobile2.png',
    link: 'https://project2arianmobile.netlify.app/'
  },
  {
    title: 'Games Hub',
    description: 'Games Hub creado mediante JS, HTML y SCSS.',
    image: './public/assets/projects/gameshub.png',
    link: 'https://proximamentegameshub.netlify.app/'
  }
]

function createCard(project) {
  const card = document.createElement('div')
  card.className = 'card'

  const img = document.createElement('img')
  img.src = project.image
  img.alt = project.title
  card.appendChild(img)

  const title = document.createElement('h4')
  title.className = 'card-title'
  title.textContent = project.title
  card.appendChild(title)

  const description = document.createElement('p')
  description.className = 'card-description'
  description.textContent = project.description
  card.appendChild(description)

  const button = document.createElement('button')
  button.className = 'view'
  button.textContent = 'Ver Web'
  button.onclick = () => window.open(project.link, '_blank')
  card.appendChild(button)

  return card
}
export function insertCards() {
  const section = document.createElement('section')
  section.className = 'projects'
  section.setAttribute('id', 'top-projects')

  const title = document.createElement('h3')
  title.textContent = 'Proyectos Destacados'
  section.appendChild(title)

  const subtitle = document.createElement('p')
  subtitle.textContent =
    'Algunos proyectos realizados en el curso Rock The Code.'
  section.appendChild(subtitle)

  const container = document.createElement('div')
  container.className = 'card-container'

  projects.forEach((project) => {
    const card = createCard(project)
    container.appendChild(card)
  })

  section.appendChild(container)

  const sectionExperience = document.querySelector('.experienceandstudies')
  sectionExperience.insertAdjacentElement('afterend', section)
}
