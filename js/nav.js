const showMenu = (botones, menu) =>{
  const icono = document.getElementById(botones),
      lista = document.getElementById(menu);

  icono.addEventListener('click', () => {
      // Add show-icon to show and hide the menu icon
      icono.classList.toggle('mostrar-icono');
      
      // Add show-menu class to nav menu
      lista.classList.toggle('mostrar-menu');
  });
}

showMenu('botones', 'nav__ul-responsive');
