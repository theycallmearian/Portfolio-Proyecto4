// Función para cambiar al modo oscuro
export function setupDarkMode() {
  document.addEventListener('DOMContentLoaded', () => {
    const switchElement = document.querySelector('#switch')

    if (switchElement) {
      switchElement.checked = true

      document.body.classList.add('dark')

      const updateDarkMode = () => {
        const header = document.querySelector('header')
        if (header) {
          header.classList.toggle('dark', switchElement.checked)
        }
        const main = document.querySelector('main')
        if (main) {
          main.classList.toggle('dark', switchElement.checked)
        }
        const footer = document.querySelector('footer')
        if (footer) {
          footer.classList.toggle('dark', switchElement.checked)
        }
        const article = document.querySelector('article')
        if (article) {
          article.classList.toggle('dark', switchElement.checked)
        }
        const section = document.querySelector('section')
        if (section) {
          section.classList.toggle('dark', switchElement.checked)
        }
      }

      updateDarkMode()

      switchElement.oninput = () => {
        document.body.classList.toggle('dark', switchElement.checked)
        updateDarkMode()
      }

      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            updateDarkMode()
          }
        }
      })

      observer.observe(document.body, { childList: true, subtree: true })
    }
  })
}
setupDarkMode()
