import './cards.scss'
import { projects } from '../../data/data'

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
