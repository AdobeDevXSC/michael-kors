/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const sections = [...block.children].length === 3 ? ['divider', 'image', 'text'] : ['image', 'text'];
  [...block.children].forEach((row) => {
    const s = sections.shift();
    row.classList.add(s);
  });

  block.classList.add('image-left', 'light');
}
