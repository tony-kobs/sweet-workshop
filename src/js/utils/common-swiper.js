const injectPaginationStyles = () => {
  const styleId = 'unified-swiper-pagination-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .swiper-pagination-bullet.unified-bullet:hover {
        background-color: var(--color-scheme-1-hover, var(--color-wewak, #c38383)) !important;
      }
      .swiper-pagination-bullet.unified-bullet.swiper-pagination-bullet-active {
        opacity: 1 !important;
        transform: scale(1.4) !important;
        background-color: var(--color-neutral-darkest, #080c0c) !important;
      }
    `;
    document.head.appendChild(style);
  }
};

export const getUnifiedPaginationConfig = elSelector => {
  injectPaginationStyles();

  return {
    el: elSelector,
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} unified-bullet" style="
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--color-neutral-darkest, #080c0c);
        opacity: 0.3;
        transition: transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease;
        cursor: pointer;
        flex-shrink: 0;
      "></span>`;
    },
  };
};

export const updateDynamicBullets = (swiper, visibleCount = 5) => {
  if (!swiper.pagination.el) return;
  const bullets = [
    ...swiper.pagination.el.querySelectorAll('.swiper-pagination-bullet'),
  ];
  const active = swiper.realIndex;
  const half = Math.floor(visibleCount / 2);

  let start = active - half;
  let end = active + half;

  if (start < 0) {
    end += Math.abs(start);
    start = 0;
  }
  if (end >= bullets.length) {
    start = Math.max(0, start - (end - bullets.length + 1));
    end = bullets.length - 1;
  }

  bullets.forEach((bullet, i) => {
    if (i < start || i > end) {
      bullet.style.display = 'none';
      return;
    }
    bullet.style.display = 'inline-block';
  });
};
