import './header.scss';

export const createHeader = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  
  // Crear y configurar el logo
  const logo = document.createElement('img');
  logo.src = 'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769568/public/assets/ariandevlogo_w_y7oohu.png';
  logo.alt = 'Logotipo de <arian.dev/>';
  logo.classList.add('logo');

  // Crear switch para el tema
  const switchLabel = document.createElement('label');
  const switchInput = document.createElement('input');
  const slider = document.createElement('div');
  const circle = document.createElement('div');
  switchLabel.classList.add('ui-switch');
  switchLabel.setAttribute('for', 'switch');
  switchInput.id = 'switch';
  switchInput.classList.add('switch__input');
  switchInput.type = 'checkbox';
  slider.classList.add('slider');
  circle.classList.add('circle');
  slider.appendChild(circle);
  switchLabel.appendChild(switchInput);
  switchLabel.appendChild(slider);

  // Crear el menú hamburguesa
  const hamburger = document.createElement('div');
  const hamburgerImg = document.createElement('img');
  hamburger.classList.add('hamburger');
  hamburgerImg.src = 'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769574/public/assets/Hamburger_fnbfw0.png';
  hamburgerImg.alt = 'Menu';
  hamburger.appendChild(hamburgerImg);
  hamburger.addEventListener('click', () => {
    ul.classList.toggle('active');
    hamburgerImg.src = ul.classList.contains('active') ?
      'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769568/public/assets/close_fchcbh.png' :
      'https://res.cloudinary.com/dye4qdrys/image/upload/v1722769574/public/assets/Hamburger_fnbfw0.png';
  });

  // Función auxiliar para crear ítems de menú
  function createMenuItem(id, text) {
    const li = document.createElement('li');
    li.textContent = text;
    li.classList.add('mainmenu');
    li.addEventListener('click', () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
    return li;
  }

  // Agregar ítems al menú
  ul.appendChild(createMenuItem('aboutme', 'Sobre mí'));
  ul.appendChild(createMenuItem('skills', 'Habilidades'));
  ul.appendChild(createMenuItem('experience', 'Experiencia'));
  ul.appendChild(createMenuItem('top-projects', 'Proyectos'));
  ul.appendChild(createMenuItem('contact', 'Contacto'));

  // Construcción final del header
  nav.appendChild(ul);
  nav.appendChild(hamburger);
  header.appendChild(logo);
  header.appendChild(nav);
  header.appendChild(switchLabel);

  document.body.prepend(header);
};
