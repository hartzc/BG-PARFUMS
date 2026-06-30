

document.addEventListener('DOMContentLoaded', () => {


  const header = document.querySelector('.header');
  const searchContainer = document.querySelector('.search-container');
  const menuCategorias = document.querySelector('.menu-categorias');


  const stickyWrapper = document.createElement('div');
  stickyWrapper.classList.add('sticky-wrapper');
  header.parentNode.insertBefore(stickyWrapper, header);
  stickyWrapper.appendChild(header);
  stickyWrapper.appendChild(searchContainer);
  stickyWrapper.appendChild(menuCategorias);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      stickyWrapper.classList.add('scrolled');
    } else {
      stickyWrapper.classList.remove('scrolled');
    }
  }, { passive: true });


  const btnMenu = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('.menu-categorias');


  const overlay = document.createElement('div');
  overlay.classList.add('menu-overlay');
  document.body.appendChild(overlay);

  function abrirMenu() {
    navMenu.classList.add('menu-aberto');
    overlay.classList.add('ativo');
    document.body.classList.add('no-scroll');
    btnMenu.classList.replace('fa-bars', 'fa-xmark');
  }

  function fecharMenu() {
    navMenu.classList.remove('menu-aberto');
    overlay.classList.remove('ativo');
    document.body.classList.remove('no-scroll');
    btnMenu.classList.replace('fa-xmark', 'fa-bars');
  }

  btnMenu.addEventListener('click', () => {
    navMenu.classList.contains('menu-aberto') ? fecharMenu() : abrirMenu();
  });

  overlay.addEventListener('click', fecharMenu);


  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', fecharMenu);
  });


  const navLinks = document.querySelectorAll('.menu-categorias a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('ativo'));
      link.classList.add('ativo');
    });
  });


  const searchInput = document.querySelector('.search-container input');
  const btnLimpar = document.createElement('i');
  btnLimpar.classList.add('fa-solid', 'fa-xmark', 'btn-limpar-busca');
  searchContainer.appendChild(btnLimpar);

  searchInput.addEventListener('input', () => {
    btnLimpar.classList.toggle('visivel', searchInput.value.length > 0);
  });

  btnLimpar.addEventListener('click', () => {
    searchInput.value = '';
    btnLimpar.classList.remove('visivel');
    searchInput.focus();
  });


  const revelaveis = document.querySelectorAll(
    '.categoria-card, .faixa-beneficios .beneficio, .hero-content, .rodape-topo, .rodape-links'
  );

  revelaveis.forEach((el, i) => {
    el.classList.add('reveal');
    // Delay escalonado nos cards da vitrine
    if (el.classList.contains('categoria-card')) {
      el.style.transitionDelay = `${i * 80}ms`;
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  }, { threshold: 0.12 });

  revelaveis.forEach(el => observer.observe(el));


  const btnTopo = document.createElement('button');
  btnTopo.classList.add('btn-topo');
  btnTopo.setAttribute('aria-label', 'Voltar ao topo');
  btnTopo.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  document.body.appendChild(btnTopo);

  window.addEventListener('scroll', () => {
    btnTopo.classList.toggle('visivel', window.scrollY > 400);
  }, { passive: true });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});