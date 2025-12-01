# Krtrim Solar - Premium Solar Solutions ☀️

A modern, high-performance website for Krtrim Solar, India's premier solar installation and cleaning service provider. Built with React, Vite, and Tailwind CSS.

![Krtrim Solar Hero](/public/hero-solar.png)

## 🚀 Features

- **Modern UI/UX**: Glassmorphism, parallax effects, and smooth animations.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Interactive Elements**:
  - Before/After Gallery Slider 📸
  - Mouse-movement Parallax Hero
  - Floating WhatsApp Chat Button 💬
  - Scroll-to-Top Navigation ⬆️
  - FAQ Accordion ❓
- **Data-Driven Content**: All content managed via JSON files for easy updates.
- **Contact Integration**: 
  - Functional contact form with Resend email integration.
  - Click-to-call and email links.

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Heroicons / Custom SVGs
- **Deployment**: GitHub Pages (CI/CD)

## 📂 Project Structure

```
src/
├── components/     # React components (Hero, Navbar, Services, etc.)
├── data/          # JSON content files (Easy to edit!)
│   ├── company.json
│   ├── contact.json
│   ├── services.json
│   ├── projects.json
│   ├── gallery.json
│   ├── testimonials.json
│   └── faq.json
├── App.jsx        # Main application component
└── index.css      # Global styles & Tailwind setup
```

## 🏃‍♂️ Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/krtrim-solar.git
   cd krtrim-solar
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 How to Edit Content

You don't need to touch the code to update text or images! Just edit the JSON files in `src/data/`:

- **Change Phone/Email**: Edit `src/data/contact.json`
- **Add Projects**: Edit `src/data/projects.json`
- **Update Services**: Edit `src/data/services.json`
- **Add Testimonials**: Edit `src/data/testimonials.json`

## 🚀 Deployment

This project is configured for **automated deployment to GitHub Pages**.

1. Push your code to the `main` branch.
2. Go to repository **Settings** > **Pages**.
3. Under "Build and deployment", select **GitHub Actions** as the source.
4. The site will automatically build and deploy to `https://your-username.github.io/krtrim-solar/`.

## 📧 Email Setup

To make the contact form work:
1. Get a free API key from [Resend](https://resend.com).
2. Update `src/data/config.json` with your key (or use environment variables for production).
3. See `RESEND_SETUP.md` for detailed instructions.

---
© 2025 Krtrim Solar. All rights reserved.
