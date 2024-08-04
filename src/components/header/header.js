import './header.scss'

export const createHeader = () => {
  const header = document.createElement('header')
  const logo = document.createElement('img')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  const sobreMi = document.createElement('li')
  const habilidades = document.createElement('li')
  const experiencia = document.createElement('li')
  const proyectos = document.createElement('li')
  const contacto = document.createElement('li')
  const switchLabel = document.createElement('label')
  const switchInput = document.createElement('input')
  const slider = document.createElement('div')
  const circle = document.createElement('div')
  const hamburger = document.createElement('div')
  const hamburgerImg = document.createElement('img')

  logo.src =
    'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769568/public/assets/ariandevlogo_w_y7oohu.png'
  logo.alt = 'Logotipo de <arian.dev/>'
  logo.classList.add('logo')

  nav.classList.add('navbar')
  ul.classList.add('nav-list')
  sobreMi.textContent = 'Sobre mí'
  sobreMi.classList.add('mainmenu')
  sobreMi.addEventListener('click', () => {
    const element = document.getElementById('aboutme')
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  })
  habilidades.textContent = 'Habilidades'
  habilidades.classList.add('mainmenu')
  habilidades.addEventListener('click', () => {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })
  })
  experiencia.textContent = 'Experiencia'
  experiencia.classList.add('mainmenu')
  experiencia.addEventListener('click', () => {
    document.getElementById('expirience').scrollIntoView({ behavior: 'smooth' })
  })
  proyectos.textContent = 'Proyectos'
  proyectos.classList.add('mainmenu')
  proyectos.addEventListener('click', () => {
    document
      .getElementById('top-projects')
      .scrollIntoView({ behavior: 'smooth' })
  })
  contacto.textContent = 'Contacto'
  contacto.classList.add('mainmenu')
  contacto.addEventListener('click', () => {
    document.getElementById('conect').scrollIntoView({ behavior: 'smooth' })
  })

  switchLabel.classList.add('ui-switch')
  switchLabel.setAttribute('for', 'switch')
  switchInput.id = 'switch'
  switchInput.classList.add('switch__input')
  switchInput.name = 'switch'
  switchInput.type = 'checkbox'

  slider.classList.add('slider')

  circle.classList.add('circle')

  hamburger.classList.add('hamburger')
  hamburgerImg.src =
    'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769574/public/assets/Hamburger_fnbfw0.png'
  hamburgerImg.alt = 'Menu'

  header.appendChild(logo)
  header.appendChild(nav)
  nav.appendChild(ul)
  ul.appendChild(sobreMi)
  ul.appendChild(habilidades)
  ul.appendChild(experiencia)
  ul.appendChild(proyectos)
  ul.appendChild(contacto)
  hamburger.appendChild(hamburgerImg)
  nav.appendChild(hamburger)

  switchLabel.appendChild(switchInput)
  switchLabel.appendChild(slider)
  slider.appendChild(circle)
  header.appendChild(switchLabel)

  hamburger.addEventListener('click', () => {
    ul.classList.toggle('active')
    if (ul.classList.contains('active')) {
      hamburgerImg.src =
        'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769568/public/assets/close_fchcbh.png'
    } else {
      hamburgerImg.src =
        'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769574/public/assets/Hamburger_fnbfw0.png'
    }
  })

  document.body.prepend(header)
}
