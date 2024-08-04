import './footer.scss'

export const createFooter = () => {
  const footer = document.createElement('footer')
  footer.classList.add('footer-container')

  const footerText = document.createElement('div')
  footerText.classList.add('footer-text')
  footerText.textContent = 'Diseñada y creada por '

  const arianLink = document.createElement('a')
  arianLink.href =
    'https://drive.google.com/uc?export=download&id=1oU9GIgfUMeDq4ErnyXhHpJ-UQb98Oisp'
  arianLink.textContent = 'Àrian Castro'
  arianLink.classList.add('footer-link')

  const iconsContainer = document.createElement('div')
  iconsContainer.classList.add('footer-icons')

  const linkedInIcon = document.createElement('a')
  linkedInIcon.href =
    'https://www.linkedin.com/in/%C3%A0rian-castro?originalSubdomain=es'
  linkedInIcon.classList.add('footer-icon')

  const linkedInImg = document.createElement('img')
  linkedInImg.src = './public/assets/linkedin.svg'
  linkedInImg.alt = 'LinkedIn'
  linkedInIcon.appendChild(linkedInImg)

  const githubIcon = document.createElement('a')
  githubIcon.href = 'https://github.com/theycallmearian'
  githubIcon.classList.add('footer-icon')

  const githubImg = document.createElement('img')
  githubImg.src = './public/assets/github.svg'
  githubImg.alt = 'GitHub'
  githubIcon.appendChild(githubImg)

  footerText.appendChild(arianLink)
  footer.appendChild(footerText)
  iconsContainer.appendChild(linkedInIcon)
  iconsContainer.appendChild(githubIcon)
  footer.appendChild(iconsContainer)

  document.body.appendChild(footer)
}

export default createFooter
