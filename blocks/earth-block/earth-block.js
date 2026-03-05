/* eslint-disable linebreak-style */
export default function decorate(block) {
  const titleBlock = block.querySelector('h2');
  if (!titleBlock) return;

  const contentContainer = titleBlock.closest('div');
  if (!contentContainer) return;

  contentContainer.classList.add('earth-block__content-wrapper');

  const paragraphs = contentContainer.querySelectorAll('p');
  if (paragraphs.length < 3) return;

  const descriptionParagraph = paragraphs[0];
  const interactiveParagraph = paragraphs[1];
  const hiddenParagraph = paragraphs[2];

  if (!interactiveParagraph.textContent.includes('+')) return;

  // Encapsulate header content
  const divContent = document.createElement('div');
  divContent.classList.add('earth-block__information-container');
  divContent.appendChild(titleBlock);
  divContent.appendChild(descriptionParagraph);
  contentContainer.appendChild(divContent);

  // Build footer
  const footerContent = document.createElement('div');
  footerContent.classList.add('earth-block__footer');
  footerContent.appendChild(interactiveParagraph);
  footerContent.appendChild(hiddenParagraph);
  contentContainer.appendChild(footerContent);

  // Separate text from button marker
  const text = interactiveParagraph.textContent.replace('+', '').trim();
  interactiveParagraph.textContent = text;

  // Create toggle button. It always shows "+" and rotates via CSS
  const button = document.createElement('button');
  button.textContent = '+';
  button.classList.add('expand-btn');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Expand content');
  button.setAttribute('type', 'button');
  button.setAttribute('title', 'Show population');
  interactiveParagraph.appendChild(button);

  // Wrap hidden content in a span for the grid animation
  const hiddenText = hiddenParagraph.textContent;
  hiddenParagraph.textContent = '';

  const innerSpan = document.createElement('span');
  innerSpan.textContent = hiddenText;
  hiddenParagraph.appendChild(innerSpan);

  // Set initial collapsed state (CSS handles the animation)
  hiddenParagraph.classList.add('earth-block__hidden-paragraph', 'collapsed');
  hiddenParagraph.classList.remove('invisible');

  // Toggle visibility with animation
  button.addEventListener('click', () => {
    const isCollapsed = hiddenParagraph.classList.toggle('collapsed');

    button.setAttribute('aria-expanded', String(!isCollapsed));
    button.setAttribute('title', isCollapsed ? 'Show population' : 'Hide population');
  });

  // Theme toggle button
  const isDark = block.classList.contains('dark');
  const cardContainer = block.querySelector(':scope > div');
  if (!cardContainer) return;

  const themeToggle = document.createElement('button');
  themeToggle.classList.add('earth-block__theme-toggle');
  themeToggle.setAttribute('type', 'button');
  themeToggle.setAttribute('aria-label', 'Toggle dark mode');
  themeToggle.setAttribute('title', 'Toggle dark mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const isDarkToggle = block.classList.toggle('dark');

    themeToggle.textContent = isDarkToggle ? '☀️' : '🌙';
    themeToggle.classList.add('earth-block__theme-toggle');
  });

  cardContainer.appendChild(themeToggle);
}
