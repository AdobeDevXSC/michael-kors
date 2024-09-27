/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const sections = [...block.children].length === 4 ? ['divider', 'image', 'text', 'style'] : ['image', 'text', 'style'];
  [...block.children].forEach((row) => {
    const s = sections.shift();
    row.classList.add(s);
  });

  const div = block.querySelector('.divider');
  if (div.textContent.trim() === '') div.remove();

  const style = block.querySelector('.style');
  const styleText = style.textContent.trim();
  if (styleText) block.classList.add(styleText);
  style.remove();
}
