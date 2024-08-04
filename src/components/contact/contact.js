import './contact.scss'

export function createContact() {
  const contactSection = document.createElement('section')
  contactSection.classList.add('contact')
  contactSection.setAttribute('id', 'conect')

  const container = document.createElement('div')
  container.classList.add('contact-container')

  const heading = document.createElement('h3')
  heading.textContent = '¿CONECTAMOS?'

  const downloadButton = document.createElement('button')
  downloadButton.textContent = 'Descargar CV'
  downloadButton.classList.add('contact-download-button')
  downloadButton.addEventListener('click', () => {
    window.location.href =
      'https://drive.google.com/uc?export=download&id=1oU9GIgfUMeDq4ErnyXhHpJ-UQb98Oisp'
  })

  const email = document.createElement('p')
  email.textContent = 'ariancastro39@gmail.com'

  const phone = document.createElement('p')
  phone.textContent = '622895879'

  const address = document.createElement('p')
  address.textContent = '08302 – Mataró (BCN)'

  container.appendChild(heading)
  container.appendChild(downloadButton)
  container.appendChild(email)
  container.appendChild(phone)
  container.appendChild(address)
  contactSection.appendChild(container)

  const projectsSection = document.querySelector('.projects')
  projectsSection.insertAdjacentElement('afterend', contactSection)
}
