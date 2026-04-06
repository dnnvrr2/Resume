# AI Prompt Log — IT 223 Midterm PIT

## AI Use Declaration

**AI Tool(s) Used:** Claude (claude.ai)

**Purpose of AI Use:**
- [x] Debugging
- [x] Refactoring
- [x] Styling suggestions

**Where AI was used:**
AI was used to assist in refining and improving specific parts of the résumé project that I had already started. I consulted Claude to help fix layout issues, clean up my CSS structure, and suggest improvements to my existing JavaScript interactions. All core logic, design decisions, and content were my own work.

*I confirm that I reviewed, tested, and understood the final code I submitted.*

---

## Prompt Log

---

### Entry #1

**Tool Used:** Claude (claude.ai)

**Prompt:**
> I have a web résumé with a single-column layout. The nav, sections, and contact form are working but I want to restructure it into a two-column layout with a dark sidebar on the left for my name, contact info, and skills, and the main content on the right. How should I adjust my CSS grid for this?

**AI Output (summary):**
Claude explained how to restructure the layout using `display: grid` with `grid-template-columns: 272px 1fr`, making the sidebar sticky with `position: sticky` and `height: calc(100vh - 52px)`, and how to move the skills section into the sidebar while keeping the main sections in the right column.

**How I used it:**
I applied the grid restructuring to my existing HTML and CSS. I adjusted the column widths and stickiness behavior based on Claude's suggestion, then manually moved my existing content into the new sidebar and main structure.

---

### Entry #2

**Tool Used:** Claude (claude.ai)

**Prompt:**
> My skill bars aren't animating when the page loads. I have the width set in data-width attributes and I'm using jQuery to read them, but they all stay at 0. How do I trigger the animation only when the skills section scrolls into view?

**AI Output (summary):**
Claude identified that the bars needed to be triggered after the element entered the viewport. It suggested using a scroll event listener combined with `offset().top` to check when the skills section is visible, then setting the `width` CSS property via jQuery to activate the CSS transition.

**How I used it:**
I added the scroll trigger function to my existing `script.js`. I already had the `.s-bar` elements and the `data-width` attributes in place — I just needed the timing logic, which I adapted from Claude's explanation into my own code.

---

### Entry #3

**Tool Used:** Claude (claude.ai)

**Prompt:**
> I want to add a show/hide toggle for extra skills in the sidebar. I have some skill rows with a class of extra-skill and they're hidden by default. I'm using jQuery — what's the cleanest way to toggle them and update the button text?

**AI Output (summary):**
Claude suggested using a boolean flag variable `expanded` and toggling it on each click, using jQuery's `show()` and `hide()` methods to control visibility and `text()` to update the button label between "View More ↓" and "View Less ↑".

**How I used it:**
I already had the button and the hidden `.extra-skill` elements in my HTML. I used Claude's approach for the toggle logic and integrated it into my existing `$(document).ready()` block.

---

### Entry #4

**Tool Used:** Claude (claude.ai)

**Prompt:**
> My contact form validation is working but after a failed submission the error states don't clear on the next attempt. How do I reset the error classes and messages before re-validating?

**AI Output (summary):**
Claude pointed out that I needed to call `removeClass('error')` on all inputs and `hide()` on all error spans at the start of the click handler, before running validation again. It also suggested resetting the feedback div's classes to avoid stacking success/error styles.

**How I used it:**
I added the reset lines at the top of my existing `#send-btn` click handler. This fixed the issue where old error states were persisting across multiple submit attempts.

---

### Entry #5

**Tool Used:** Claude (claude.ai)

**Prompt:**
> I want to separate my project into three files: index.html, css/styles.css, and js/script.js. My project is currently all in one HTML file. What do I need to change in index.html to link the external files correctly?

**AI Output (summary):**
Claude explained to replace the `<style>` block with `<link rel="stylesheet" href="css/styles.css" />` in the `<head>`, and replace the `<script>` block with two script tags at the bottom of `<body>` — jQuery CDN first, then `<script src="js/script.js"></script>` — since jQuery must load before the custom script.

**How I used it:**
I followed this structure to split my single file into the required three-file format for submission. I verified that the page loaded correctly in Chrome after the split.
