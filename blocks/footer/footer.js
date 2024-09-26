import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  const country = document.createElement('div');
  country.classList.add('country-selector');

  const button = document.createElement('button');
  button.classList.add('country-selector-button');

  const spn = document.createElement('span');
  spn.classList.add('globe-icon');

  const spnName = document.createElement('span');
  spnName.classList.add('country-selector-name');
  spnName.textContent = 'English';

  button.append(spn, spnName);
  country.append(button);

  footer.append(country);

  block.append(footer);
}
