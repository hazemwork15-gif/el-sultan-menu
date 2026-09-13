const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');

document.querySelectorAll('[data-src]').forEach(button => {
  button.addEventListener('click', () => {
    const src = button.dataset.src;
    lightboxImage.src = src;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  });
});

function closeViewer(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImage.removeAttribute('src');
  document.body.style.overflow = '';
}

closeLightbox.addEventListener('click', closeViewer);
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeViewer(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeViewer(); });
