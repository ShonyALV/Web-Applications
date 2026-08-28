# My Site

This project is an enhanced multi-page personal website designed to present information about my university, academic background, interests, and student life. It features professional styling and a modular CSS architecture for improved maintainability and reusability.

## 👤 Author
* **Jhony Penaherrera** ([ShonyALV](https://github.com/ShonyALV))

## Project Overview

The website includes a home page and several additional sections with custom styling that provide details about:

- academic courses
- class schedule
- research work
- leadership and club experience
- contact information

The project demonstrates modern web development practices with a separation of concerns between base styles and reusable components.

## Project Structure

```text
with css/
├── README.md
└── workshop2/
    └── my-site/
        ├── index.html
        ├── README.md
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

1. Navigate to the `workshop2/my-site/` folder.
2. Open `index.html` in a web browser.
3. Use the navigation menu to explore the different sections of the website.
4. All styling is automatically applied through the linked CSS files.

## Technologies Used

- HTML
- CSS (with modular architecture)
- CSS Variables for theming
- Static web pages
- Browser-based navigation

## Notes

This project extends the Workshop 1 static HTML site with professional styling. It follows CSS best practices by organizing styles into:
- **Base CSS**: Global styles and reusable CSS variables that define color schemes and typography
- **Components CSS**: Encapsulated component styles that can be reused across multiple pages

This modular approach ensures consistency across the website and makes it easy to maintain and update styles.
