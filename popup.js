(function() {
  let popup, iframe, fechar;

  function criarPopup() {
    popup = document.createElement('div');
    popup.style.cssText = 'display:none;position:fixed;z-index:9999;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,0.7);justify-content:center;align-items:center;';
    popup.id = 'popup-video';

    fechar = document.createElement('span');
    fechar.innerHTML = '&times;';
    fechar.style.cssText = 'position:absolute;top:10px;right:20px;font-size:30px;color:#fff;cursor:pointer;';
    popup.appendChild(fechar);

    iframe = document.createElement('iframe');
    iframe.width = '640';
    iframe.height = '360';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    popup.appendChild(iframe);

    document.body.appendChild(popup);

    fechar.addEventListener('click', fecharPopup);
    popup.addEventListener('click', e => {
      if (e.target === popup) fecharPopup();
    });
  }

  function abrirPopup(videoUrl) {
    if (!popup) criarPopup();
    iframe.src = videoUrl + '?autoplay=1';
    popup.style.display = 'flex';
  }

  function fecharPopup() {
    iframe.src = '';
    popup.style.display = 'none';
  }

  window.abrirPopup = abrirPopup;
})();
