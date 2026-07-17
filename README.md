<p align="center">
  <img src="frontend/src/assets/logo.png" width="200" alt="CHUA Logo">
</p>

<h1 align="center">CHUA - Architecture & Construction Platform</h1>

<p align="center">
  <strong>An all-in-one portal for premium architectural design, 3D rendering, and blueprint construction services.</strong>
</p>

---

## 🏗️ Project Overview

**CHUA Constructions** is a modern, responsive web application combining a secure backend API with a high-performance React + Tailwind CSS frontend interface. It is designed to showcase previous projects, highlight professional services, and capture client quotation requests through an interactive, validation-secured modal form.

---

## 🚀 Key Features

* **Premium Mobile UI/UX:**
  * **Dynamic Mobile Navbar:** Inline active page badge, fixed-width quote action button, and a sliding hamburger dropdown list (with redundant buttons removed).
  * **Cursive Hero Headlines:** Cursive Dancing Script font accents globally styled for focus title words ("Trust", "Built", "Design").
* **Responsive Homepage Sections:**
  * **Features Cards:** Quality Plans, ALL in ONE, and Unique Design (using `image 5.png`) with clean hover states and responsive wrapping.
  * **About Banner:** Full-width header image (`image 2.png`) with a floating centered logo overlay.
  * **Stats Counter:** Interactive metric counters for Projects Completed and Customers Satisfied, optimized to prevent mobile layout collisions.
  * **Most Booked Services & Recent Projects:** Landscape responsive aspect ratios and vertical column stacking on touch viewports.
  * **Testimonials:** Fully interactive client review slider with prev/next chevron navigation and pagination controls.
* **Vertical Project Modal:** Reimplemented as a responsive vertical modal that overlays a top image header with a flex-based, scrollable details container, preventing text clipping on small screen heights.
* **Details Back Navigation:** Styled back chevron link on Projects article subpages for easy back navigation.
* **Secure Request Quote Form:**
  * Custom inline dropdown selector UI to prevent mobile overflow.
  * Live keyboard-mash/spam prevention and a 500-character description limit with active counter.
  * Captcha removed for a friction-free user experience.
  * Double-submission blocker with animated status checks.

---

## 📁 Codebase Directory Structure

```
construction-site/
├── backend/                  # Express/Node.js Backend Application
│   ├── config/               # Database and server config
│   ├── models/               # MongoDB/SQL models
│   └── routes/               # Backend API endpoints
├── frontend/                 # React Frontend Application (Vite + Tailwind CSS)
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── assets/           # Media, images, videos, and icons
│   │   ├── components/       # Reusable components (WebPage, ServicePage, layout)
│   │   ├── pages/            # Core views (WebPage, ServicePage, Project details)
│   │   └── main.jsx          # React entrypoint
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 💻 Getting Started

### Prerequisites
* Node.js (>= 18.0) & npm
* MongoDB / SQL Database (as configured in backend)

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the hot-reloading development server:
   ```bash
   npm run dev
   ```
4. Open **`http://localhost:5173`** in your browser.

---

## 📄 License
This project is open-sourced software licensed under the [MIT license](LICENSE).
