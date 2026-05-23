/**
 * Автоматична генерація ЖИРНИХ inline-SVG зірочок суворо з кроком округлення 0.5 за ТЗ
 */
export function generateStarsTemplate(
  rate,
  slideId = '',
  {
    width = 20,
    height = 19,
  } = {}
) {
  const numericRate = parseFloat(rate) || 0;

  const roundedRate =
    Math.round(numericRate * 2) / 2;

  let starsHtml = '';

  const fatStarPath =
    'M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z';

  for (let i = 1; i <= 5; i++) {
    if (roundedRate >= i) {
      starsHtml += `
        <svg
          class="star-icon is-active"
          width="${width}"
          height="${height}"
          viewBox="0 0 20 19"
        >
          <path d="${fatStarPath}"/>
        </svg>`;
    } else if (roundedRate === i - 0.5) {
      const gradientId = slideId
        ? `fatStarGrad-${slideId}-${i}`
        : `fatStarGrad-${i}`;

      starsHtml += `
        <svg
          class="star-icon is-half"
          width="${width}"
          height="${height}"
          viewBox="0 0 20 19"
        >
          <defs>
            <linearGradient id="${gradientId}">
              <stop
                offset="50%"
                stop-color="var(--color-neutral-darkest, #080c0c)"
              />
              <stop
                offset="50%"
                stop-color="transparent"
              />
            </linearGradient>
          </defs>

          <path
            fill="url(#${gradientId})"
            d="${fatStarPath}"
          />
        </svg>`;
    } else {
      starsHtml += `
        <svg
          class="star-icon"
          width="${width}"
          height="${height}"
          viewBox="0 0 20 19"
        >
          <path fill="transparent" d="${fatStarPath}"/>
        </svg>`;
    }
  }

  return starsHtml;
}