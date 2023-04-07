## What is this project?

This is a demo project that shows how to create a reusable Header and Footer components using Next.js and Typescript.

## Project Setup

```bash
# Create Next App 
npx create-next-app@latest <YOUR_PROJECT_NAME> --typescript --eslint

# Install dependencies
npm install -D tailwindcss postcss autoprefixer

# Run initialize command to generate both `tailwind.config.js` and `postcss.config.js`
npx tailwindcss init -p

# Configure `src` template paths in the `tailwind.config.js`
content: ["./src/**/*.{js,ts,jsx,tsx}"],

# Add the Tailwind directives to `globals.css` file in styles directory
@tailwind base;
@tailwind components;
@tailwind utilities;

# Reference the official docs
https://tailwindcss.com/docs/guides/nextjs
```

## Usage

```bash
npm run dev
```