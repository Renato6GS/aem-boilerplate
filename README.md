# Earth Block — Adobe Edge Delivery Services (EDS)

Custom block built with Adobe EDS that displays an interactive information card about Earth, featuring animated content reveal, dark mode support, and responsive design.

## Demo

📹 [Video demo](LINK_HERE)

## Features

- **Interactive content toggle:** Expandable section that reveals additional information with a smooth slide-down animation using the CSS `grid-template-rows` technique.
- **Dark mode:** Variant class `.dark` supported both via EDS authoring and a runtime toggle button (🌙/☀️) that switches themes dynamically.
- **Hover effects:** Card elevation with shadow transition and subtle image zoom on hover.
- **Entrance animation:** Fade-in and slide-up animation on initial render.
- **Responsive design:** Stacks to a vertical layout on viewports ≤ 480px, with the image spanning full width.
- **Accessibility:** `aria-expanded` attributes on toggle buttons, `focus-visible` outlines for keyboard navigation, and `prefers-reduced-motion` media query to disable animations when the user prefers it.
- **CSS design tokens:** All colors, shadows, spacing, and transitions defined as CSS custom properties scoped to the block, making the dark mode a simple override of variables.

## Project Structure

```
/blocks/earth-block/
├── earth-block.js     # Block decoration logic and event handling
├── earth-block.css    # Styles, dark mode, animations, and responsive rules
```

## Authoring

The block is authored in a "da.live" document following the standard EDS block format with two columns: the left column contains the image and the right column contains the text content. The `+` character in the content signals the interactive expand button.

To enable dark mode by default, add the `dark` variant to the block name in the authoring table (e.g., `Earth Block (dark)`).
