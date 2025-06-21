---
title: "🚀 How to Use Tailwind CSS in Next.js (2025 Edition)"
description: Learn how to integrate Tailwind CSS with your Next.js project step-by-step. Perfect for modern, responsive websites.
date: "2025-06-17"
slug: how-to-use-tailwind-css-in-nextjs
coverImage: "https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"
---

> 🔥 Tailwind CSS + Next.js = 🔥 Developer Superpower<br>

> Build beautiful, fast UIs with no CSS headache.


<br>

<br>

---


---


## 🎯 What You'll Learn

✅ Set up Tailwind in Next.js (App Router)  
✅ Add dark mode support  
✅ Create a responsive layout  
✅ Add a working dark mode toggle  
✅ Tips for customizing and scaling your design

---

## 🛠️ Step 1: Create Your Next.js Project

First, make sure you’re using the `app/` directory structure.

```bash
npx create-next-app@latest my-blog --app
cd my-blog
```

Use `--app` to enable the latest app router structure.

---

## 📦 Step 2: Install Tailwind and Its Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

✅ This will generate:

- `tailwind.config.js`
- `postcss.config.js`

---

## ⚙️ Step 3: Configure Tailwind

Update your `tailwind.config.js` to match your folders:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ⬅️ enable dark mode support
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🎨 Step 4: Add Tailwind to Global CSS

Open `app/globals.css` and paste:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

✅ This loads Tailwind's full power into your app.

---

## ✨ Step 5: Test It!

Edit `app/page.js`:

```jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      <h1 className="text-4xl font-bold mb-4">🚀 Tailwind is Working!</h1>
      <p className="text-lg">You're now using Tailwind CSS in a Next.js app.</p>
    </div>
  );
}
```

Run it:

```bash
npm run dev
```

Visit `http://localhost:3000` and smile 😎

---

## 🌙 Step 6: Add a Dark Mode Toggle

Create a button component like:

```jsx
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
    >
      Toggle {dark ? "☀️ Light" : "🌙 Dark"} Mode
    </button>
  );
}
```

Now import it in your layout, navbar, or homepage. You’re a frontend boss 💼

---

## 📁 Folder Structure (Optional)

```bash
my-blog/
├─ app/
│  ├─ page.js
│  ├─ layout.js
│  ├─ globals.css
├─ components/
│  ├─ ThemeToggle.jsx
├─ posts/
│  ├─ how-to-use-tailwind-css-in-nextjs.md
├─ tailwind.config.js
├─ postcss.config.js
```

---

## 🧠 Pro Tips

✅ Use [shadcn/ui](https://ui.shadcn.com/) for beautiful UI  
✅ Try `@tailwindcss/typography` for blog styling  
✅ Use `prose` classes for better Markdown looks  
✅ Enable `font-sans` from Google Fonts in your `tailwind.config.js`

---

## ✅ Conclusion

You just:
- Created a modern Next.js app
- Installed Tailwind CSS
- Added a working dark mode toggle
- Styled your first responsive page

Now you’re ready to build stunning websites with speed and style. 🎨🚀

If this helped, bookmark this blog and share it with other devs. Happy coding!


