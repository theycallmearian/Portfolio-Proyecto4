import './styles.scss'
import { createHeader } from './src/components/header/header'
import { createMain } from './src/components/createmain/createmain'
import { setupDarkMode } from './src/functions/modedark'
import { experienceAndStudies } from './src/components/expirience-studies/expirience-studies'
import { insertCards } from './src/components/cards/cards'
import { createContact } from './src/components/contact/contact'
import createFooter from './src/components/footer/footer'
import { createScrollUpButton } from './src/components/scrollup/scrollup'

document.addEventListener('DOMContentLoaded', () => {
  createHeader()
  createMain()
  createScrollUpButton()
})

experienceAndStudies()

document.addEventListener('DOMContentLoaded', () => {
  insertCards()
  createContact()
  createFooter()
})

setupDarkMode()
