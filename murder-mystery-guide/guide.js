/* ── Accordion ── */
function toggleAccordion(header) {
  const item = header.closest('.accordion-item');
  const body = item.querySelector('.accordion-body');

  if (item.classList.contains('open')) {
    item.classList.remove('open');
    body.style.maxHeight = '0';
  } else {
    item.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}

function openAccordionItem(item) {
  if (!item || item.classList.contains('open')) return;
  const body = item.querySelector('.accordion-body');
  item.classList.add('open');
  body.style.maxHeight = body.scrollHeight + 'px';
}

/* ── Term Link Navigation ── */
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target && target.classList.contains('accordion-item')) {
      setTimeout(() => {
        openAccordionItem(target);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }

  document.querySelectorAll('a[href^="#term-"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      if (target.classList.contains('accordion-item')) {
        e.preventDefault();
        openAccordionItem(target);
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    });
  });
});
