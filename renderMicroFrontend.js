function renderMicroFrontend(pathname) {
  const microFrontend = routes[pathname || window.location.hash];
  const root = document.getElementById('microfrontend');
  root.innerHTML = microFrontend ? new microFrontend().render(): new Home().render();
  $(window).scrollTop(0);
}

$(window).bind( 'hashchange', function(e) { renderMicroFrontend(window.location.hash); });
renderMicroFrontend(window.location.hash);