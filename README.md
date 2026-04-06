# Denver P. Amba — Interactive Web Résumé

A one-page interactive web résumé built for IT 223 (Web Systems and Technologies) Midterm Performance Innovative Task.

---

## Live Demo

**GitHub Pages:** *(paste your link here)*
**Demo Video:** *(paste your YouTube link here)*

---

## Project Structure

```
resume/
├── index.html        
├── css/
│   └── styles.css    
├── js/
│   └── script.js     
├── assets/           
├── README.md         
└── PROMPTS.md        
```

---

## Features

### HTML (Module 2)
- HTML5 boilerplate with semantic structure
- Sections: About, Education, Skills, Projects, Contact
- Anchor-based navigation (`href="#section"`)
- Profile image with proper `alt` attribute
- Contact form with Name, Email, Message, and Send button

### CSS (Module 3)
- External CSS file (`css/styles.css`)
- Element, class, and ID selectors
- Pseudo-class: `:hover` on nav links, buttons, and cards
- Box model: intentional use of `padding`, `margin`, and `border`
- Layout: CSS Grid (two-column sidebar + main) and Flexbox

### JavaScript (Module 4)
Nine features implemented:
1. **Prompt-based personalization** — asks visitor's name, stores it in `sessionStorage`, displays greeting
2. **Animated skill bars** — triggered on scroll via `IntersectionObserver`
3. **Show/Hide toggle** — "View More / View Less" for extra skills using DOM manipulation
4. **Contact form validation** — checks required fields with regex email validation and inline error feedback
5. **Dynamic footer year** — `new Date().getFullYear()` updates the copyright year automatically
6. **Fade-in on scroll** — `IntersectionObserver` adds `.visible` class to sections as they enter the viewport
7. **DOM append** — availability tag dynamically created with `createElement()` and `after()`
8. **Dark mode persistence** — reads and writes to `localStorage` to remember theme across visits
9. **Hire Me pop-up** — modal panel opened and closed via DOM class toggling

### jQuery (Module 4.1)
- Loaded via CDN before `script.js`
- All code wrapped in `$(document).ready(function () { ... })`
- Methods used: `toggleClass()`, `addClass()`, `removeClass()`, `show()`, `hide()`, `text()`, `html()`, `val()`, `css()`, `each()`
- Events: `.on('click', ...)` for dark mode toggle, skills toggle, form submit, hire me panel

### Bonus Features (+5)
- Dark mode toggle using `toggleClass()`
- Animated skill bars triggered on scroll
- Hire Me interactive pop-up panel

---

## Modules Covered

- Module 2: HTML Structure
- Module 3: CSS Styling
- Module 4: JavaScript
- Module 4.1: jQuery

---

## AI Usage

AI tools were used in the development of this project. See `PROMPTS.md` for the full prompt log and AI Use Declaration.

---

## Author

**Denver P. Amba**
BSIT — University of Science and Technology of Southern Philippines
ambadenver0@gmail.com
