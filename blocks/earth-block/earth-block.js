/* eslint-disable linebreak-style */
export default function decorate(block) {
  const CONFIG = {
    TITLE_BLOCK: 'h2',
    DIV: 'div',
    CONTENT_CONTAINER_CLASS: 'content-container',
    IMAGE_CONTAINER_CLASS: 'image-container',
    INTERACTIVE_ELEMENT_CLASS: 'interactive-element',
    BUTTON: 'button',
    EXPAND_BUTTON_CLASS: 'expand-btn',
    HIDDEN_CONTENT_CLASS: 'hidden-content',
    HIDDEN_CLASS: 'hidden',
    HIDDEN_CONTENT_SELECTOR: ':scope > div:last-child > div:last-child',
    EXPAND_SYMBOL: '+',
    COLLAPSE_SYMBOL: '−',
    ARIA_EXPANDED: 'aria-expanded',
    ARIA_LABEL: 'aria-label',
    ARIA_LABEL_VALUE: 'Expand content',
    ATTR_TYPE: 'type',
    ATTR_TITLE: 'title',
    TITLE_SHOW: 'Show content',
    TITLE_HIDE: 'Hide content',
  };

  const titleBlock = block.querySelector(CONFIG.TITLE_BLOCK);
  if (!titleBlock) return;

  const contentContainer = titleBlock.closest(CONFIG.DIV);
  if (!contentContainer) return;

  contentContainer.classList.add(CONFIG.CONTENT_CONTAINER_CLASS);

  const imageContainer = contentContainer.previousElementSibling;
  if (!imageContainer) return;

  imageContainer.classList.add(CONFIG.IMAGE_CONTAINER_CLASS);

  const lastElement = contentContainer.lastElementChild;
  if (lastElement.length === 0) return;

  lastElement.classList.add(CONFIG.INTERACTIVE_ELEMENT_CLASS);

  const button = document.createElement(CONFIG.BUTTON);
  button.textContent = CONFIG.EXPAND_SYMBOL;
  button.classList.add(CONFIG.EXPAND_BUTTON_CLASS);
  button.setAttribute(CONFIG.ARIA_EXPANDED, 'false');
  button.setAttribute(CONFIG.ARIA_LABEL, CONFIG.ARIA_LABEL_VALUE);
  button.setAttribute(CONFIG.ATTR_TYPE, CONFIG.BUTTON);
  button.setAttribute(CONFIG.ATTR_TITLE, CONFIG.TITLE_SHOW);
  lastElement.appendChild(button);

  const hiddenContent = block.querySelector(CONFIG.HIDDEN_CONTENT_SELECTOR);
  if (hiddenContent) {
    hiddenContent.classList.add(CONFIG.HIDDEN_CONTENT_CLASS, CONFIG.HIDDEN_CLASS);
    button.addEventListener('click', () => {
      const isHidden = hiddenContent.classList.toggle(CONFIG.HIDDEN_CLASS);
      button.textContent = isHidden ? CONFIG.EXPAND_SYMBOL : CONFIG.COLLAPSE_SYMBOL;
      button.setAttribute(CONFIG.ARIA_EXPANDED, String(!isHidden));
      button.setAttribute(CONFIG.ATTR_TITLE, isHidden ? CONFIG.TITLE_SHOW : CONFIG.TITLE_HIDE);
    });
  }
}
