import './scrollup.scss'

export const createScrollUpButton = () => {
  const button = document.createElement('button')
  button.classList.add('scroll-up-button')
  button.innerHTML = '&#x2191;'

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  document.body.appendChild(button)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      button.classList.add('visible')
    } else {
      button.classList.remove('visible')
    }
  })
}
