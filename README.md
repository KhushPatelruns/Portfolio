# Khush Patel — Engineering Portfolio

## Quick Start

1. Open the **`khush-portfolio`** folder in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Site runs at `http://127.0.0.1:5500`

---

## Folder Structure

```
khush-portfolio/
├── index.html              ← Main page (hero, about, internships, projects, contact)
├── resume.html             ← Resume page
├── style.css               ← All styles
├── main.js                 ← Interactions, animations, scroll effects
├── README.md               ← This file
│
├── assets/
│   ├── images/
│   │   ├── profile.jpeg    ← YOUR PROFILE PHOTO (replace placeholder)
│   │   └── resume.jpeg     ← Resume preview image (optional)
│   └── docs/
│       └── resume.pdf      ← YOUR RESUME PDF (replace placeholder)
│
└── projects/
    └── robotic-arm.html    ← Robotic Arm project detail page
```

---

## How to Customize

### Replace Placeholder Content

| Placeholder | File | What to do |
|---|---|---|
| Profile photo | `assets/images/profile.jpeg` | Add your photo (rename to `profile.jpeg`) |
| Resume PDF | `assets/docs/resume.pdf` | Drop in your resume PDF |
| Contact email | `index.html` | Search `your@email.com`, replace |
| LinkedIn | `index.html` | Search `yourhandle`, replace |
| GitHub | `index.html` | Search `yourhandle`, replace |
| Internship info | `index.html` | Find `INTERNSHIP 1` / `INTERNSHIP 2` sections |

### Add a New Project

1. Duplicate `projects/robotic-arm.html`, rename it
2. Fill in your project details
3. Add a new `.project-card` block in `index.html` under `#projects`
4. Update the `href` to point to your new file

### To Use the Profile Photo

In `index.html`, find the `.hero-img-placeholder` div and replace with:

```html
<img src="assets/images/profile.jpeg" alt="Khush Patel" 
     style="width:100%;height:100%;object-fit:cover;border-radius:12px;" />
```

### Colors

Edit the CSS variables at the top of `style.css`:

```css
--accent: #3B82F6;   /* Change the blue accent color */
--cyan:   #22D3EE;   /* Secondary highlight color */
--navy:   #0A0F1E;   /* Background color */
```

---

## Pages

- **`index.html`** — Single-page portfolio: Hero → About → Internships → Projects → Contact
- **`resume.html`** — Resume viewer with download link
- **`projects/robotic-arm.html`** — Robotic Arm detail page with video placeholders and FEA section

---

Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.
