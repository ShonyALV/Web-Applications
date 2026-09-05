# My Site

This project is a fully interactive multi-page personal website designed to present information about my university, academic background, interests, and student life. It features professional styling with a modular CSS architecture and dynamic interactivity through JavaScript for improved user experience and functionality.

## 👤 Author
* **Jhony Penaherrera** ([ShonyALV](https://github.com/ShonyALV))

## Project Overview

The website includes a home page and several additional sections with custom styling and interactive features that provide details about:

- academic courses
- class schedule
- research work
- leadership and club experience
- contact information

The project demonstrates modern web development practices with a separation of concerns between HTML structure, CSS styling, and JavaScript functionality. It implements interactive elements that enhance user engagement and provide a dynamic browsing experience.

## Project Structure

```text
HTML+CSS+JS/
├── README.md
└── workshop3/
    └── my-site/
        ├── index.html
        ├── script.js
        ├── css/
        │   ├── base.css
        │   └── components.css
        ├── images/
        │   ├── profile.jpg
        │   ├── university.jpg
        │   ├── ASO_logo.png
        │   ├── Yachay_Times.png
        │   ├── ccc.png
        │   ├── cs.png
        │   ├── bloques_yt.jpg
        │   ├── multis_yt.jpg
        │   ├── senescyt_yt.jpg
        │   ├── volcan_yt.jpg
        │   └── RussianClub.png
        └── pages/
            ├── clubs.html
            ├── contact.html
            ├── courses.html
            ├── research.html
            └── schedule.html
```

## Pages

- `index.html` - Main landing page with an introduction and student profile
- `pages/courses.html` - Information about the courses currently being taken
- `pages/schedule.html` - Academic timetable
- `pages/research.html` - Research interests and activities
- `pages/clubs.html` - Leadership experience and student organizations
- `pages/contact.html` - Contact form and contact details

## Stylesheets

- **`css/base.css`** - Base styles including CSS variables, typography, layout foundations, and global styles. This file establishes the visual foundation of the website by defining color schemes through CSS custom properties (variables), setting typography rules for headings and body text, establishing layout grids, and applying consistent styling to basic HTML elements. It ensures a unified look and feel throughout all pages.

- **`css/components.css`** - Reusable component styles for buttons, cards, forms, navigation, and other UI elements. This file contains encapsulated styles for individual UI components that can be used across multiple pages. It includes styling for interactive elements like buttons and form inputs, container components like cards, navigation menus, and any other modular interface elements. This approach promotes code reuse and makes maintenance easier.

## JavaScript Functionality

- **`script.js`** - Central JavaScript file that implements dynamic interactivity and functionality throughout the website. This file handles:
  - DOM manipulation and event handling
  - Interactive navigation and menu behaviors
  - Form validation and submission
  - Dynamic content updates and user interactions
  - Enhancement of user experience with smooth animations and responsive feedback
  - Client-side logic that brings the static HTML and CSS to life with dynamic functionality

## CSS Styling Approach

This project implements the three CSS methods required for this workshop: **linked**, **global**, and **local (inline)** styles.

### 1. Linked (external stylesheets)
Two external stylesheets are used across all six pages:

- **`css/base.css`** — design tokens (colors, typography, spacing), CSS reset, and the shared layout shell: header, navigation, and footer.
- **`css/components.css`** — reusable components: hero/about section, chips, cards, timeline, contact form, schedule table, and the wave-shaped `<hr>` divider used site-wide.

These two files are linked from every page (`index.html` and all files in `pages/`) and account for the vast majority of the site's styling, since it's shared across pages.

### 2. Global (`<style>` in `<head>`)
Used in **`index.html`** only, for a rule that is specific to the homepage and doesn't belong in a shared file: a radial glow behind the profile photo in the "About Me" hero section.

### 3. Local (inline `style=""`)
Used in two specific, justified cases where a single element needed to break from the shared styling:

- **`pages/clubs.html`** — the "President" role (Russian Club) is highlighted in gold, since it's the only club where I held the highest leadership position, unlike the other Web-master/Marketing roles.
- **`pages/research.html`** — the EEG Pattern Detection project card overrides its default green left border with a gold one, since this project connects most directly with my main academic interest (neuroscience and coupled functions).

In both cases, the inline style is applied on top of an existing shared class (`.role` / `.card research-card`), so it acts as a punctual exception rather than a repeated or unjustified rule.

## How to Use

1. Navigate to the `workshop3/my-site/` folder.
2. Open `index.html` in a web browser.
3. Use the navigation menu to explore the different sections of the website.
4. All styling is automatically applied through the linked CSS files.
5. Interactive features are powered by the JavaScript functionality in `script.js`.

## Technologies Used

- HTML
- CSS (with modular architecture)
- CSS Variables for theming
- JavaScript for interactivity and dynamic behavior
- Static web pages with dynamic enhancements
- Browser-based navigation and interactions

## Notes

This is an intermediate front-end project that builds upon the previous HTML and HTML+CSS workshops by adding JavaScript interactivity. The project demonstrates how to combine HTML structure, CSS styling, and JavaScript functionality to create a rich, interactive user experience.