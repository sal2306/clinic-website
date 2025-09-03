# 🌿 Dr G Ali Clinic Website

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge\&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![Lucide React](https://img.shields.io/badge/Icons-LUCIDE-8A2BE2?style=for-the-badge\&logo=react\&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge\&logo=vercel)

A modern, responsive, and professional website for **Dr G Ali Clinic** built with **Next.js**, **Tailwind CSS**, and deployed on **Vercel**. The site is designed mobile-first and optimized for accessibility and performance.

---

## 🚀 Live Demo

👉 [View Website](https://your-vercel-domain.vercel.app)

---

## ✨ Features

* Hero banner with clinic name, tagline, and CTA buttons
* Responsive navigation bar with logo and centered tabs
* Feature cards highlighting core clinic values
* Photo carousel for events and clinic moments (dynamic)
* Services section with icons (Lucide)
* About, Services, Contact pages with consistent backgrounds
* Embedded Google Map for clinic location
* Mobile-first responsive layout

---

## 🔧 Technologies Used

* Next.js 15 (App Router)
* React 18
* Tailwind CSS 3
* Lucide React (icons)
* Vercel (deployment)

---

## ⚙️ README: Installation & Setup (FULL)

Follow these exact commands to run the project locally. Copy & paste each block into your terminal while in the repository root.

### 1) Clone the repository

```bash
git clone https://github.com/<your-username>/dr-g-ali-clinic.git
cd dr-g-ali-clinic
```

### 2) Install dependencies

```bash
npm install
```

> If you encounter a `tailwindcss` version error on install or Vercel, open `package.json` and pin a stable Tailwind release (example: `"tailwindcss": "^3.4.14"`), then re-run `npm install`.

### 3) Run development server (hot-reload)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4) Build for production (create optimized build)

```bash
npm run build
```

### 5) Run production server locally

```bash
npm start
```

This serves the optimized production build. (Make sure you already ran `npm run build`.)

### 6) (Optional) Lint the code

```bash
npm run lint
```

---

## 🌐 Deployment on Vercel (step-by-step)

1. Push your repo to GitHub (example):

```bash
git add .
git commit -m "chore: ready for deploy"
git push origin main
```

2. Sign in to [https://vercel.com/](https://vercel.com/) using your GitHub account.
3. Click **New Project** → select/import your `dr-g-ali-clinic` repository.
4. Vercel will auto-detect Next.js. Use the default build command (`npm run build`) and default settings. If Vercel shows build errors about a package, update `package.json` & `package-lock.json`, then push again.
5. Click **Deploy**. Vercel will provide a `*.vercel.app` domain.

**Notes:**

* Private GitHub repos are supported; allow Vercel's GitHub App to access the repo.
* Vercel automatically redeploys on each push to the connected branch.

---

## 📁 Project Structure

```
dr-g-ali-clinic/
├── app/
│   ├── components/       # Navbar, TopBar, Footer, Carousel, etc.
│   ├── data/             # Services/events JSON or JS data
│   ├── about/            # about/page.js
│   ├── services/         # services/page.js
│   ├── contact/          # contact/page.js (contains Google Map iframe)
│   ├── page.js           # Homepage
│   └── globals.css       # Tailwind base + custom global styles
├── public/
│   ├── images/           # logo.png, backgrounds, screenshots
│   └── favicon.ico
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔒 License

This project is provided for **educational / demo** purposes. You may adapt and reuse it for your own clinic or small business projects. No warranty is provided — use at your own risk.

