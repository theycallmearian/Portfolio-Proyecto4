import './expirience-studies.scss'

export const experienceAndStudies = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const aboutMeSkillsSection = document.querySelector('.aboutme-skills')

    const experienceAndStudiesSection = document.createElement('section')
    experienceAndStudiesSection.classList.add('experienceandstudies')
    experienceAndStudiesSection.setAttribute('id', 'expirience')

    const container = document.createElement('div')
    container.classList.add('container')

    const tabs = document.createElement('div')
    tabs.classList.add('tabs')

    const experienceTab = document.createElement('button')
    experienceTab.id = 'experienceTab'
    experienceTab.classList.add('tab', 'active')
    experienceTab.textContent = 'Experiencia'

    const studiesTab = document.createElement('button')
    studiesTab.id = 'studiesTab'
    studiesTab.classList.add('tab')
    studiesTab.textContent = 'Estudios'

    tabs.appendChild(experienceTab)
    tabs.appendChild(studiesTab)

    const content = document.createElement('div')
    content.classList.add('contenido')

    const experienceContent = document.createElement('div')
    experienceContent.id = 'experienceContent'
    const experienceParagraph1 = document.createElement('p')
    experienceParagraph1.textContent =
      '2016 - 2017: Community Manager - Tellmebye'
    const experienceParagraph2 = document.createElement('p')
    experienceParagraph2.textContent =
      '2017 - 2024: Gestor de Conocimientos / Supervisor de Operaciones / Gestor de Proyectos - Konecta'
    const experienceParagraph3 = document.createElement('p')
    experienceParagraph3.textContent =
      '2024 - (Actualidad): Gestor Back Office - Trebol Energia'

    experienceContent.appendChild(experienceParagraph1)
    experienceContent.appendChild(experienceParagraph2)
    experienceContent.appendChild(experienceParagraph3)

    const studiesContent = document.createElement('div')
    studiesContent.id = 'studiesContent'
    const studiesParagraph1 = document.createElement('p')
    studiesParagraph1.textContent =
      '2011 - 2014: CFGM - Sistemas Microinformaticos y Redes (IES Thos I Codina)'
    const studiesParagraph2 = document.createElement('p')
    studiesParagraph2.textContent =
      '2015 - 2017: CFGS - Gestión de Ventas y Espacios Comerciales (IES Thos I Codina)'
    const studiesParagraph3 = document.createElement('p')
    studiesParagraph3.textContent =
      'Enero 2024 - Actualidad: Master - Bootcamp - Fullstack Developer (Rock The Code)'
    studiesContent.appendChild(studiesParagraph1)
    studiesContent.appendChild(studiesParagraph2)
    studiesContent.appendChild(studiesParagraph3)

    content.appendChild(experienceContent)
    content.appendChild(studiesContent)

    container.appendChild(tabs)
    container.appendChild(content)

    experienceAndStudiesSection.appendChild(container)

    aboutMeSkillsSection.insertAdjacentElement(
      'afterend',
      experienceAndStudiesSection
    )
    experienceTab.addEventListener('click', function () {
      experienceContent.style.display = 'block'
      studiesContent.style.display = 'none'
      experienceTab.classList.add('active')
      studiesTab.classList.remove('active')
    })

    studiesTab.addEventListener('click', function () {
      studiesContent.style.display = 'block'
      experienceContent.style.display = 'none'
      studiesTab.classList.add('active')
      experienceTab.classList.remove('active')
    })

    experienceContent.style.display = 'block'
    studiesContent.style.display = 'none'
  })
}
