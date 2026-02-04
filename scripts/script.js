// Bloquear botão direito
document.addEventListener('contextmenu', e => e.preventDefault());

// Bloquear drag
document.addEventListener('dragstart', e => e.preventDefault());

// Ajustar velocidade do vídeo para 1.5x
window.addEventListener('load', () => {
    const video = document.getElementById('logo-video');
    if (video) {
        video.playbackRate = 1.5;
    }
});








const btnTopo = document.getElementById("btn-topo");
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);


  window.addEventListener("scroll", () => {
    if (window.scrollY > 12 * rem) {
      btnTopo.style.display = 'flex';

    } else {
        btnTopo.style.display = 'none'
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });