export default function decorate(block) {
  const buttonNameDiv = block.querySelector('div:nth-child(3)');
  const styleDiv = block.querySelector('div:nth-child(4)');
  const styleClass = styleDiv.textContent.trim();
  styleDiv.remove();
  block.classList.add(styleClass);
  const buttonName = buttonNameDiv.textContent.trim();
  buttonNameDiv.remove();
  block.querySelector('.button-container').textContent = buttonName;

  const div = document.createElement('div');
  div.classList.add('promo-conditions');

  const pc = document.createElement('a');
  pc.href = 'https://www.michaelkors.com/info/promo-conditions.html';

  const p = document.createElement('p');
  p.textContent = 'PRICES AS MARKED | PRODUCT EXCLUSIONS APPLY | TERMS';

  pc.append(p);
  div.append(pc);
  block.append(div);
}
