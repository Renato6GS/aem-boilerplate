# Earth Block — Adobe Edge Delivery Services (EDS)

Custom block built with Adobe EDS that displays an interactive information card about Earth, featuring expandable content, line-clamped text, and a mobile-first responsive layout.

## Demo

[Video demo](https://drive.google.com/file/d/1PRbuMgWsEzOVq5gJ8-vv-xW4GHNJ4xy4/view?usp=sharing)

## Sites

The sites are:
[Publish](https://main--aem-boilerplate--renato6gs.aem.page/)
[Preview](https://main--aem-boilerplate--renato6gs.aem.live/)

## Project Structure

```
/blocks/earth-block/
├── earth-block.js     # Block decoration logic
├── earth-block.css    # Mobile-first styles with CSS nesting
```

## Authoring

The block is authored in a da.live document. The first row contains two columns: an image (left) and text content (right). In the second column and second row holds the hidden content that is revealed by the expand button.

| Earth Block |                          |
|-------------|--------------------------|
| [image]     | Heading and paragraph text |
| [Empty] | Hidden content  |
