import './expirience-studies.scss'

import { experienceData } from '../../data/data'

import { studiesData } from '../../data/data'

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
    experienceData.forEach((text) => {
      const paragraph = document.createElement('p')
      paragraph.textContent = text
      experienceContent.appendChild(paragraph)
    })

    const studiesContent = document.createElement('div')
    studiesContent.id = 'studiesContent'
    studiesData.forEach((text) => {
      const paragraph = document.createElement('p')
      paragraph.textContent = text
      studiesContent.appendChild(paragraph)
    })

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
