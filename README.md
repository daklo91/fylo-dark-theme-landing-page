# README.md

# Frontend Mentor - Fylo dark theme landing page solution

This is my solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd).

I built this project as a deliberate frontend fundamentals refresh while getting back into hands-on development. The constraint was intentional: **no frameworks, libraries, preprocessors, or build tools** — just HTML, CSS, and JavaScript.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI collaboration](#ai-collaboration)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an appropriate responsive layout across mobile, tablet, and desktop sizes
- See hover states for interactive elements
- Submit the email form and receive validation feedback for invalid input
- Navigate a page built with semantic and accessibility-minded markup

### Links

- [Live site](https://fylo-daklo.netlify.app/)
- [GitHub repository](https://github.com/daklo91/fylo-dark-theme-landing-page)
- [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd)

## My process

I started mobile-first and worked through the page section by section. I translated the design values into reusable CSS custom properties, built the page structure in semantic HTML, and then expanded the layout at tablet and desktop breakpoints.

Because the goal of the project was to strengthen fundamentals, I deliberately solved the responsive layout, interaction states, form validation, and accessibility details without framework abstractions.

### Built with

- Semantic HTML5
- CSS custom properties and design tokens
- CSS Flexbox
- CSS Grid
- Mobile-first responsive workflow
- Vanilla JavaScript
- HTML Constraint Validation API
- Inline SVG with `currentColor` for interactive icon states
- Netlify for deployment

### What I learned

#### Building responsive layouts without abstractions

The project was useful practice in making layout decisions directly in CSS. The base styles target mobile, with dedicated breakpoints at `768px` and `1440px` for larger layouts.

The page uses both Grid and Flexbox depending on the problem: Grid for the feature layout and Flexbox for components such as navigation, testimonials, forms, and the footer.

#### Turning design values into reusable tokens

Instead of scattering repeated values throughout the stylesheet, I created CSS custom properties for colors, spacing, and typography.

```css
:root {
  --color-blue-300: #62e0d9;
  --color-navy-900: #181f2b;
  --spacing-300: 24px;
  --spacing-1000: 80px;
}
```

This made it easier to keep the implementation consistent with the design and adjust values without hunting through the stylesheet.

#### Accessibility is part of the implementation

I added accessibility details rather than treating them as a separate pass. Examples include decorative images with empty `alt` attributes, accessible labels for icon-only links, and a visually hidden label for the email field.

The form also connects its validation state to assistive technology with `aria-describedby`, `aria-invalid`, and `aria-live`.

```html
<input
  id="sign-up-email"
  type="email"
  required
  aria-describedby="sign-up-error"
  aria-invalid="false"
/>

<p id="sign-up-error" aria-live="polite">Error, please check your email</p>
```

#### Native browser APIs can handle a lot

The sign-up form uses the browser's built-in validity state instead of bringing in a validation library.

```js
if (!signUpEmail.validity.valid) {
  signUpError.classList.add("show-error");
  signUpEmail.setAttribute("aria-invalid", "true");
  return;
}
```

The project was a useful reminder that vanilla HTML, CSS, and JavaScript already provide a strong platform for many common UI problems.

### Continued development

The goal is not to stay exclusively in vanilla JavaScript. This project was about rebuilding confidence and sharpening the fundamentals underneath framework work.

I want to carry the same attention to responsive layout, semantic HTML, accessibility, and understandable CSS into larger React, TypeScript, and Next.js projects.

### AI collaboration

I used ChatGPT as a development partner during the project, mainly for debugging, discussing CSS behavior, checking accessibility approaches, and comparing possible solutions.

The most useful part was using AI as a second set of eyes when something behaved unexpectedly, while still reasoning through the implementation and integrating the final decisions into the code myself. Keeping the project strictly vanilla also made it easier to stay focused on the underlying browser technologies instead of hiding problems behind abstractions.

## Author

- GitHub - [@daklo91](https://github.com/daklo91)
