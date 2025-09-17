# 🚀 evolution-template

> A motion-ready, scalable, and design-first Next.js 14 template built for rapid prototyping and future extensibility.

---

## ✨ Features

- ✅ Next.js 14 App Router (TypeScript, `src/`, `app/`)
- ✅ Tailwind CSS w/ container queries
- ✅ Framer Motion animations
- ✅ Responsive Grid Component
- ✅ SEO Component (`<Seo />`)
- ✅ Clean folder structure and path aliases (`@/*`)
- ✅ Prettier + ESLint configured
- ✅ `/debug` route for component testing and prototyping

---

## 🔧 Folder Structure

```
evolution-template/
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── page.tsx        # Homepage
│   │   ├── layout.tsx      # Root layout
│   │   └── debug/page.tsx  # Debug UI
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   ├── layout/         # Layout-specific components
│   │   └── shared/         # Shared logic or UI
│   ├── lib/                # Logic, clients, utils
│   ├── utils/              # Helper functions
│   └── styles/
│       ├── globals.css     # Tailwind base + custom CSS
│       └── tailwind/       # (optional) token splits
├── public/                 # Static assets
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── .eslintrc.json
├── .prettierrc
├── README.md
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/Badders80/evolution-template.git
cd evolution-template

# Install dependencies
npm install

# Start the dev server
npm run dev

# Visit the debug page
http://localhost:3000/debug
```

---

## 📦 Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS 3
- Framer Motion
- TypeScript
- ESLint + Prettier
- Container Queries
- Clean Codebase with VS Code-ready aliases

---

## 🧩 Optional Add-ons (Planned)

- Zustand global state
- SVGR icon components
- Plop.js generator CLI
- Storybook integration
- Image optimization helpers
- Preloaded fonts

---

## 🧠 Philosophy

This template is designed for developers who want:

✨ Beautiful UI from day one

⚡ Fast iteration

♻️ Reusable components

🔌 Future integration flexibility

---

## 👨‍💻 Author

Badders80

Built with precision and clarity — scalable from MVP to production.

---

## 📄 License

MIT — Use freely for commercial or personal projects.

---

## ✅ Part 3: Template Review

> 🔍 **Is your template matching the plan?**

Let’s check against the original goals:

| ✅ Goal | 🧩 Present in Template |
|--------|------------------------|
| App Router, TypeScript, Tailwind | ✅ Installed |
| Motion-ready UI | ✅ Framer Motion + example |
| Design-first responsive layout | ✅ `ResponsiveGrid.tsx` |
| SEO component | ✅ `<Seo />` added |
| Folder structure | ✅ Matches exactly |
| VS Code-ready config | ✅ Alias + formatting done |
| Dev playground | ✅ `/debug` page live |
| Ready to scale (Zustand, etc.) | ✅ Hooks planned |

💯 You’re on track and **ahead of most teams at this stage**.

---

## ✅ Next?

Let me know if you'd like to:

- Add Zustand next
- Add SVG support (`SVGR`)
- Add `Plop.js` for generating components
- Add `Storybook` integration

Ready to drop them in whenever you are.
